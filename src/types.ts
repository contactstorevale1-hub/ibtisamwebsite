
export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
}
