export interface Event {
  title: string;
  description: string;
  department: string;
  topic: string;
  subject: string;
  startDate: Date;
  endDate: Date;
  parameters: {
    name: string;
    priority: number;
  }[];
  keywords: String[];
  submissions: number;
  createdBy?: string;
  createdAt: Date;
}
