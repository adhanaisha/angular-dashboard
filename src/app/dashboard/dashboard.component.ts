import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, LayoutDashboard, ListTodo, Inbox, Calendar, Folder, Users, Clock, DollarSign, UserPlus, Settings, HelpCircle } from 'lucide-angular';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  user = "Arnold Smith";

  stats = [
    { title: 'Total Employees', value: '173', change: '+1.8%', info: '+16 from last month' },
    { title: 'Job Applicant', value: '983', change: '+2.4%', info: '+32 from last month' },
    { title: 'Total Revenue', value: '$4,842', change: '+4.2%', info: '+$3,834 from last month' },
    { title: 'Attendance Rate', value: '75%', change: '-1.7%', info: '-6.4% from last month' }
  ];

  // 🔥 HEATMAP
  heatmap = Array.from({ length: 50 }, () =>
    Math.floor(Math.random() * 3) + 1
  );

  // ✅ ADD THIS (ICONS FIX)
  icons = {
    dashboard: LayoutDashboard,
    tasks: ListTodo,
    inbox: Inbox,
    calendar: Calendar,
    projects: Folder,
    employees: Users,
    attendance: Clock,
    payroll: DollarSign,
    hiring: UserPlus,
    settings: Settings,
    help: HelpCircle
  };

}