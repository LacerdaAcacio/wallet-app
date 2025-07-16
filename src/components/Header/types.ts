import React from 'react';

export type HeaderVariant = 'default' | 'wallet';

export interface HeaderProps {
  title?: string;
  variant?: HeaderVariant;
  rightComponent?: React.ReactNode;
}

export interface HeaderStyleProps {
  variant: HeaderVariant;
}
