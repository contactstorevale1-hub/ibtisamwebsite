
import React from 'react';
import { 
  Briefcase, 
  BarChart3, 
  PieChart, 
  Settings, 
  Target, 
  ShieldCheck, 
  TrendingUp, 
  Database,
  Calculator,
  FileSpreadsheet,
  Globe,
  Layers
} from 'lucide-react';
import { Experience, Service } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Genetics Pharmaceuticals',
    role: 'Assistant Manager Budgeting & Costing',
    period: 'Oct 2024 - Present',
    location: 'Lahore, Pakistan',
    description: 'Leading pharma company driven by quality and innovation.',
    responsibilities: [
      'Calculation of Tender bid price and cost of new products',
      'Profitability Analysis & brand-wise P&L reporting',
      'Preparation and controlling of annual budgets',
      'Inventory Ageing analysis (FG & RM)'
    ]
  },
  {
    id: '2',
    company: 'School of Professional Accountants (SPA)',
    role: 'Instructor',
    period: 'May 2023 - Present',
    location: 'Lahore, Pakistan',
    responsibilities: [
      'Teaching Cost & Management Accounting',
      'Advanced Management Accounting',
      'Strategic Management Accounting'
    ]
  },
  {
    id: '3',
    company: 'BM Homoeopathic Pharmaceuticals',
    role: 'Senior Costing & Budgeting Officer',
    period: 'Dec 2023 - Sep 2024',
    location: 'Lahore, Pakistan',
    responsibilities: [
      'Developing completely new costing systems and cost centers',
      'Creation of BOMs and production process streamlining',
      'Budgeting (2024-2025) and cost-cutting strategies',
      'Production planning for all departments'
    ]
  },
  {
    id: '4',
    company: 'Haseeb Builders & Developers',
    role: 'Cost Accountant',
    period: 'Jun 2021 - Dec 2023',
    location: 'Bahawalpur, Pakistan',
    responsibilities: [
      'Detailed budgeting for construction projects',
      'Estimating costs of materials, labor, and overheads',
      'Calculating project profitability and bid prices',
      'Tracking project-related expenses'
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Cost Analysis & Control',
    description: 'Deep understanding of cost accounting principles, variance analysis, and CVP analysis to optimize bottom-line performance.',
    icon: 'Calculator'
  },
  {
    id: 's2',
    title: 'Strategic Budgeting',
    description: 'Meticulous preparation and revision of annual budgets with precise control measures for organizational financial health.',
    icon: 'Target'
  },
  {
    id: 's3',
    title: 'Pricing Strategies',
    description: 'Data-driven pricing models for new products and tender bids, ensuring competitive market positioning and profitability.',
    icon: 'TrendingUp'
  },
  {
    id: 's4',
    title: 'Business Intelligence',
    description: 'Advanced reporting, KPI development, and operational metrics analysis to support strategic decision-making.',
    icon: 'Database'
  },
  {
    id: 's5',
    title: 'Process Optimization',
    description: 'Streamlining production workflows and designing inventory management systems (EOQ, ROL) for maximum efficiency.',
    icon: 'Settings'
  },
  {
    id: 's6',
    title: 'Financial Reporting',
    description: 'Accurate and timely P&L reporting at team, brand, and SM levels, providing clear financial insights.',
    icon: 'BarChart3'
  }
];

export const TOOLS = [
  { name: 'SAP', color: 'bg-blue-600' },
  { name: 'QuickBooks', color: 'bg-green-500' },
  { name: 'Excel', color: 'bg-emerald-600' },
  { name: 'SQL', color: 'bg-indigo-500' },
  { name: 'Microsoft Dynamics', color: 'bg-pink-600' },
  { name: 'NetSuite', color: 'bg-orange-500' }
];

export const STATS = [
  { label: 'Years Experience', value: '4+' },
  { label: 'Successful Clients', value: '12+' },
  { label: 'Success Rate', value: '98%' },
  { label: 'Projects Completed', value: '25+' }
];
