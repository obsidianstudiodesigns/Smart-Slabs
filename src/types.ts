export interface SlabSolution {
  id: string;
  name: string;
  category: 'slabs' | 'staircases';
  tagline: string;
  description: string;
  keyFeatures: string[];
  blockOptions?: string[];
  idealFor: string[];
  maxSpan: string;
  installationSpeed: string;
  proppingRequirement: string;
  fireRating: string;
  weightCategory: string;
  technicalDetails: {
    concreteGrade: string;
    reinforcement: string;
    toppingThickness: string;
    soundInsulation: string;
  };
  image: string;
}

export interface QuoteRequest {
  fullName: string;
  phone: string;
  email: string;
  siteLocation: string;
  slabSolution: string;
  blockType: string;
  estimatedArea: number;
  floorLevel: string;
  requiresStaircase: boolean;
  staircaseType: string;
  additionalNotes: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Hollowcore' | 'Rib & Block' | 'Insitu' | 'Staircases' | 'Commercial';
  location: string;
  area: string;
  description: string;
  image: string;
}
