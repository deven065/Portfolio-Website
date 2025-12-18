export interface Invoice {
  id: string;
  invoiceNumber: string;
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  clientAddress?: string;
  amount: number;
  totalAmount: number;  // Total with tax
  subtotal?: number;
  tax?: number;
  currency: string;
  description: string;
  items: InvoiceItem[];
  status: "pending" | "paid" | "cancelled";
  date: string;  // Creation date
  createdAt: string;
  paidAt?: string;
  paymentId?: string;
  dueDate?: string;
  notes?: string;
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

export interface CreateInvoiceRequest {
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  clientAddress?: string;
  amount: number;
  currency: string;
  description: string;
  items: InvoiceItem[];
  dueDate?: string;
  notes?: string;
}
