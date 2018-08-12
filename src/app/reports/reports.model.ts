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

export class PromotionSummary{
    promotionName: string;
    totalOrders: string;
    totalAmount: string;
    
}

export class CustomerSummary {
    email: string;    
    totalOrders: string;
    totalAmount: string;
}