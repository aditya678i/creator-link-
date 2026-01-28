
import React from 'react';

// Added React import to resolve "Cannot find namespace 'React'" error.
export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StepProps {
  number: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface CampaignSuggestion {
  strategy: string;
  niche: string;
}