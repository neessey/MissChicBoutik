import { useState } from 'react';
import { FilterOptions } from '@/types';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProductFiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
}

export default function ProductFilters({ onFilterChange }: ProductFiltersProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    category: '',
    minPrice: 0,
    maxPrice: 50000,
  });

  const handleCategoryChange = (category: string) => {
    const newFilters = { ...filters, category: category === 'all' ? '' : category };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (values: number[]) => {
    const newFilters = { ...filters, minPrice: values[0], maxPrice: values[1] };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const resetFilters: FilterOptions = {
      category: '',
      minPrice: 0,
      maxPrice: 50000,
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filtres</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Category Filter */}
        <div>
          <Label className="text-base font-semibold mb-3 block">Catégorie</Label>
          <RadioGroup value={filters.category || 'all'} onValueChange={handleCategoryChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all" className="cursor-pointer">Tous les produits</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="vetements" id="vetements" />
              <Label htmlFor="vetements" className="cursor-pointer">Vêtements</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="accessoires" id="accessoires" />
              <Label htmlFor="accessoires" className="cursor-pointer">Accessoires</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="chaussures" id="chaussures" />
              <Label htmlFor="chaussures" className="cursor-pointer">Chaussures</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Price Filter */}
        <div>
          <Label className="text-base font-semibold mb-3 block">Prix (FCFA)</Label>
          <div className="px-2">
            <Slider
              min={0}
              max={50000}
              step={1000}
              value={[filters.minPrice || 0, filters.maxPrice || 50000]}
              onValueChange={handlePriceChange}
              className="mb-4"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{(filters.minPrice || 0).toLocaleString()} FCFA</span>
              <span>{(filters.maxPrice || 50000).toLocaleString()} FCFA</span>
            </div>
          </div>
        </div>

        <Button onClick={handleReset} variant="outline" className="w-full">
          Réinitialiser les filtres
        </Button>
      </CardContent>
    </Card>
  );
}