import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Plus,
  Search,
  Filter,
  Eye,
  ExternalLink,
  CheckCircle2,
  Clock,
  XCircle,
  Calendar,
  DollarSign,
} from "lucide-react";
import { Invoice } from "@shared/invoice";
import { Link } from "react-router-dom";

type StatusFilter = "all" | "pending" | "paid" | "cancelled";

export default function InvoiceDashboard() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      const response = await fetch("/api/invoices");
      const data = await response.json();
      if (data.success) {
        setInvoices(data.invoices);
      }
    } catch (error) {
      console.error("Error fetching invoices:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch =
      invoice.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.clientEmail.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "all" || invoice.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-500/20 border border-green-500/30 text-green-400 rounded-full text-xs font-medium">
            <CheckCircle2 className="w-3 h-3" />
            Paid
          </span>
        );
      case "pending":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 rounded-full text-xs font-medium">
            <Clock className="w-3 h-3" />
            Pending
          </span>
        );
      case "cancelled":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-500/20 border border-red-500/30 text-red-400 rounded-full text-xs font-medium">
            <XCircle className="w-3 h-3" />
            Cancelled
          </span>
        );
      default:
        return null;
    }
  };

  const stats = {
    total: invoices.length,
    pending: invoices.filter((inv) => inv.status === "pending").length,
    paid: invoices.filter((inv) => inv.status === "paid").length,
    totalRevenue: invoices
      .filter((inv) => inv.status === "paid")
      .reduce((sum, inv) => sum + inv.totalAmount, 0),
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Invoice Dashboard
              </h1>
              <p className="text-xl text-slate-300">
                Manage and track all your invoices
              </p>
            </div>
            <Link to="/create-invoice">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Plus className="w-5 h-5 mr-2" />
                Create Invoice
              </Button>
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-400">Total Invoices</span>
                <FileText className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-3xl font-bold">{stats.total}</p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-400">Pending</span>
                <Clock className="w-5 h-5 text-yellow-400" />
              </div>
              <p className="text-3xl font-bold text-yellow-400">{stats.pending}</p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-400">Paid</span>
                <CheckCircle2 className="w-5 h-5 text-green-400" />
              </div>
              <p className="text-3xl font-bold text-green-400">{stats.paid}</p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-400">Total Revenue</span>
                <DollarSign className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-3xl font-bold text-cyan-400">
                ₹{stats.totalRevenue.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by invoice number, client name, or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-800 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
              />
            </div>

            <div className="flex gap-2">
              <Button
                variant={statusFilter === "all" ? "default" : "outline"}
                onClick={() => setStatusFilter("all")}
                className={statusFilter === "all" ? "bg-blue-500 hover:bg-blue-600" : ""}
              >
                All
              </Button>
              <Button
                variant={statusFilter === "pending" ? "default" : "outline"}
                onClick={() => setStatusFilter("pending")}
                className={statusFilter === "pending" ? "bg-yellow-500 hover:bg-yellow-600" : ""}
              >
                Pending
              </Button>
              <Button
                variant={statusFilter === "paid" ? "default" : "outline"}
                onClick={() => setStatusFilter("paid")}
                className={statusFilter === "paid" ? "bg-green-500 hover:bg-green-600" : ""}
              >
                Paid
              </Button>
            </div>
          </div>

          {/* Invoices Table */}
          {loading ? (
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-12 text-center">
              <p className="text-slate-400">Loading invoices...</p>
            </div>
          ) : filteredInvoices.length === 0 ? (
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-12 text-center">
              <FileText className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400 mb-2">
                {searchQuery || statusFilter !== "all"
                  ? "No invoices match your filters"
                  : "No invoices yet"}
              </p>
              {!searchQuery && statusFilter === "all" && (
                <Link to="/create-invoice">
                  <Button
                    className="mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Create Your First Invoice
                  </Button>
                </Link>
              )}
            </div>
          ) : (
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-800/50 border-b border-slate-800">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-slate-300">
                        Invoice #
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-slate-300">
                        Client
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-slate-300">
                        Date
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-slate-300">
                        Due Date
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-slate-300">
                        Amount
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-slate-300">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-slate-300">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {filteredInvoices.map((invoice) => (
                      <tr key={invoice.id} className="hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium text-white">
                          {invoice.invoiceNumber}
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm">
                            <p className="text-white font-medium">{invoice.clientName}</p>
                            <p className="text-slate-400 text-xs">{invoice.clientEmail}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-300">
                          {new Date(invoice.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-300">
                          {new Date(invoice.dueDate).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-white">
                          {invoice.currency === 'INR' ? '₹' : '$'}
                          {invoice.totalAmount.toLocaleString()}
                        </td>
                        <td className="px-6 py-4">{getStatusBadge(invoice.status)}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            {invoice.status === "pending" && (
                              <a
                                href={`/payment?invoice=${invoice.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                                title="Payment Link"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
