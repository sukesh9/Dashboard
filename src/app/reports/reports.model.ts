class Summary{
    title: string;
    quantity: string;
    amount: string;
}

class OrderReport {
    totalRevenue: string;
    totalOrders: string;
    averageOrderValue: string;
}

export class ItemSummary{
    orderReport: OrderReport;
    summary : Summary[];

}