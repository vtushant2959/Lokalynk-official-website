import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import {
  Users, TrendingUp, Clock, Download, CheckCircle, RefreshCw,
  LogOut, LayoutDashboard, BarChart2, Eye
} from "lucide-react";

const COLORS = ["#2C5EAD", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#06b6d4"];

function Login({ onLogin }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { data } = await axios.post("/api/auth/login", { password });
      if (data.success) {
        localStorage.setItem("admin_token", data.token);
        onLogin(data.token);
      }
    } catch {
      setError("Invalid password. Try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-gradient-brand rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <LayoutDashboard className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-2xl font-black text-gray-900">Lokalynk Admin</h1>
          <p className="text-gray-500 text-sm mt-1">Sign in to your dashboard</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            required
          />
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <button type="submit" disabled={loading}
            className="w-full bg-gradient-brand text-white font-bold py-3 rounded-xl hover:opacity-90 transition-all disabled:opacity-50">
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function Admin() {
  const [token, setToken] = useState(() => localStorage.getItem("admin_token"));
  const [tab, setTab] = useState("overview");
  const [leads, setLeads] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const authHeaders = { Authorization: `Bearer ${token}` };

  const fetchData = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    try {
      const [leadsRes, analyticsRes] = await Promise.all([
        axios.get("/api/leads", { headers: authHeaders }),
        axios.get("/api/analytics", { headers: authHeaders }),
      ]);
      setLeads(leadsRes.data.leads || []);
      setAnalytics(analyticsRes.data);
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem("admin_token");
        setToken(null);
      }
    }
    setLoading(false);
  }, [token]);

  useEffect(() => { fetchData(); }, [fetchData]);

  if (!token) return <Login onLogin={t => setToken(t)} />;

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setToken(null);
  };

  const handleStatusUpdate = async (id) => {
    try {
      await axios.patch(`/api/leads/${id}`, { respondedAt: new Date() }, { headers: authHeaders });
      fetchData();
    } catch {}
  };

  const exportCSV = () => {
    const headers = ["Name", "Email", "Phone", "Service", "Budget", "Message", "Source", "Status", "Date"];
    const rows = leads.map(l => [
      l.name, l.email, l.phone, l.service, l.budget || "", l.message || "",
      l.source || "website", l.respondedAt ? "Responded" : "Pending",
      new Date(l.createdAt).toLocaleDateString("en-IN")
    ]);
    const csv = [headers, ...rows].map(r => r.map(v => `"${String(v || "").replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "leads.csv"; a.click();
    URL.revokeObjectURL(url);
  };

  const filteredLeads = leads.filter(l => {
    const matchFilter = filter === "all" || (filter === "pending" ? !l.respondedAt : !!l.respondedAt);
    const q = search.toLowerCase();
    const matchSearch = !search || l.name?.toLowerCase().includes(q) || l.email?.toLowerCase().includes(q) || l.phone?.includes(q);
    return matchFilter && matchSearch;
  });

  const stats = analytics?.stats || {};

  const TABS = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "leads", label: "Leads", icon: Users },
    { id: "charts", label: "Charts", icon: BarChart2 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-4 h-4 text-white" />
            </div>
            <span className="font-black text-gray-900 text-sm">Lokalynk Admin</span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={fetchData} className="text-gray-500 hover:text-primary transition-colors">
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </button>
            <button onClick={handleLogout} className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-red-500 transition-colors">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto w-full px-4 py-6 flex-1">
        <div className="flex gap-1 bg-gray-100 rounded-xl p-1 mb-6 w-fit">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => setTab(id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${tab === id ? "bg-white text-primary shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>
              <Icon className="w-4 h-4" /> {label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Total Leads", value: stats.total || leads.length, icon: Users, color: "text-blue-600 bg-blue-50" },
                { label: "This Week", value: stats.thisWeek || 0, icon: TrendingUp, color: "text-green-600 bg-green-50" },
                { label: "Pending", value: stats.pending || leads.filter(l => !l.respondedAt).length, icon: Clock, color: "text-orange-600 bg-orange-50" },
                { label: "Responded", value: stats.responded || leads.filter(l => !!l.respondedAt).length, icon: CheckCircle, color: "text-purple-600 bg-purple-50" },
              ].map(s => (
                <div key={s.label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${s.color}`}>
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-black text-gray-900">{s.value}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-50 flex items-center justify-between">
                <h2 className="font-black text-gray-900 text-sm">Recent Leads</h2>
                <button onClick={() => setTab("leads")} className="text-primary text-xs font-semibold flex items-center gap-1">
                  View all <Eye className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead className="bg-gray-50 text-gray-500">
                    <tr>{["Name", "Phone", "Service", "Source", "Date", "Status"].map(h => <th key={h} className="text-left px-4 py-3 font-semibold">{h}</th>)}</tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {leads.slice(0, 5).map(l => (
                      <tr key={l._id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-4 py-3 font-medium text-gray-900">{l.name}</td>
                        <td className="px-4 py-3 text-gray-600">{l.phone}</td>
                        <td className="px-4 py-3 text-gray-600">{l.service}</td>
                        <td className="px-4 py-3"><span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-[10px] font-semibold capitalize">{l.source || "website"}</span></td>
                        <td className="px-4 py-3 text-gray-500">{new Date(l.createdAt).toLocaleDateString("en-IN")}</td>
                        <td className="px-4 py-3"><span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${l.respondedAt ? "bg-green-50 text-green-700" : "bg-orange-50 text-orange-600"}`}>{l.respondedAt ? "Responded" : "Pending"}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {tab === "leads" && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-50 flex flex-wrap items-center gap-3">
              <h2 className="font-black text-gray-900 text-sm flex-1">All Leads ({filteredLeads.length})</h2>
              <input type="text" placeholder="Search name, email, phone..." value={search} onChange={e => setSearch(e.target.value)}
                className="border border-gray-200 rounded-lg px-3 py-1.5 text-xs w-52 focus:outline-none focus:ring-2 focus:ring-primary/20" />
              <select value={filter} onChange={e => setFilter(e.target.value)} className="border border-gray-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none">
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="responded">Responded</option>
              </select>
              <button onClick={exportCSV} className="flex items-center gap-1.5 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors">
                <Download className="w-3.5 h-3.5" /> Export CSV
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead className="bg-gray-50 text-gray-500">
                  <tr>{["Name", "Email", "Phone", "Service", "Budget", "Source", "Message", "Date", "Action"].map(h => <th key={h} className="text-left px-4 py-3 font-semibold">{h}</th>)}</tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filteredLeads.map(l => (
                    <tr key={l._id} className={`hover:bg-gray-50/50 transition-colors ${!l.respondedAt ? "bg-orange-50/30" : ""}`}>
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{l.name}</td>
                      <td className="px-4 py-3 text-gray-600">{l.email}</td>
                      <td className="px-4 py-3 whitespace-nowrap"><a href={`tel:${l.phone}`} className="text-primary font-semibold">{l.phone}</a></td>
                      <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{l.service}</td>
                      <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{l.budget || "—"}</td>
                      <td className="px-4 py-3"><span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-[10px] font-semibold capitalize">{l.source || "website"}</span></td>
                      <td className="px-4 py-3 text-gray-500 max-w-[160px] truncate">{l.message || "—"}</td>
                      <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{new Date(l.createdAt).toLocaleDateString("en-IN")}</td>
                      <td className="px-4 py-3">
                        {!l.respondedAt ? (
                          <button onClick={() => handleStatusUpdate(l._id)} className="flex items-center gap-1 bg-green-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg hover:bg-green-600 transition-colors whitespace-nowrap">
                            <CheckCircle className="w-3 h-3" /> Mark Done
                          </button>
                        ) : (
                          <div className="flex items-center gap-1 text-green-600 text-[10px] font-semibold whitespace-nowrap">
                            <CheckCircle className="w-3 h-3" />{new Date(l.respondedAt).toLocaleDateString("en-IN")}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                  {filteredLeads.length === 0 && <tr><td colSpan={9} className="text-center text-gray-400 py-12">No leads found</td></tr>}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === "charts" && analytics && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-black text-gray-900 text-sm mb-4">Leads — Last 30 Days</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <LineChart data={analytics.dailyLeads || []}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} allowDecimals={false} />
                    <Tooltip />
                    <Line type="monotone" dataKey="count" stroke="#2C5EAD" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-black text-gray-900 text-sm mb-4">Leads by Source</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie data={analytics.bySource || []} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false}>
                      {(analytics.bySource || []).map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-black text-gray-900 text-sm mb-4">Top Services Requested</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={analytics.topServices || []} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis type="number" tick={{ fontSize: 10 }} allowDecimals={false} />
                    <YAxis type="category" dataKey="name" tick={{ fontSize: 10 }} width={120} />
                    <Tooltip />
                    <Bar dataKey="count" fill="#2C5EAD" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-black text-gray-900 text-sm mb-4">Weekly Lead Trend</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={analytics.weeklyTrend || []}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="week" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="count" fill="#10b981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            {analytics.avgResponseHours !== undefined && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-black text-gray-900">{analytics.avgResponseHours}h</div>
                  <div className="text-gray-500 text-xs">Average Response Time</div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
