interface SectorData {
  name: string;
  percentage: number;
  color: string;
}

interface SectorChartProps {
  data: SectorData[];
}

export default function SectorChart({ data }: SectorChartProps) {
  // Calculate total and add "Otros" to make it 100%
  const total = data.reduce((sum, sector) => sum + sector.percentage, 0);
  const otros = 100 - total;
  
  const allSectors = [
    ...data,
    { name: 'Otros', percentage: otros, color: 'bg-chart-4' }
  ];

  // Convert color classes to actual colors for SVG
  const colorMap: Record<string, string> = {
    'bg-chart-1': 'oklch(var(--chart-1))',
    'bg-chart-2': 'oklch(var(--chart-2))',
    'bg-chart-3': 'oklch(var(--chart-3))',
    'bg-chart-4': 'oklch(var(--chart-4))'
  };

  // Calculate pie chart segments
  let currentAngle = -90; // Start at top
  const segments = allSectors.map((sector) => {
    const angle = (sector.percentage / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;

    // Convert angles to radians and calculate path
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    
    const x1 = 100 + 90 * Math.cos(startRad);
    const y1 = 100 + 90 * Math.sin(startRad);
    const x2 = 100 + 90 * Math.cos(endRad);
    const y2 = 100 + 90 * Math.sin(endRad);
    
    const largeArc = angle > 180 ? 1 : 0;
    
    const pathData = [
      `M 100 100`,
      `L ${x1} ${y1}`,
      `A 90 90 0 ${largeArc} 1 ${x2} ${y2}`,
      `Z`
    ].join(' ');

    return {
      ...sector,
      pathData,
      color: colorMap[sector.color] || 'oklch(var(--chart-1))'
    };
  });

  return (
    <div className="w-full max-w-md mx-auto">
      <svg viewBox="0 0 200 200" className="w-full h-auto">
        {segments.map((segment, index) => (
          <g key={index}>
            <path
              d={segment.pathData}
              fill={segment.color}
              stroke="oklch(var(--background))"
              strokeWidth="2"
              className="transition-opacity hover:opacity-80"
            />
          </g>
        ))}
      </svg>
      
      {/* Legend */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        {allSectors.map((sector, index) => (
          <div key={index} className="flex items-center gap-2">
            <div 
              className={`w-4 h-4 rounded-sm ${sector.color}`}
            />
            <span className="text-sm font-medium text-foreground">
              {sector.name}: <span className="font-bold text-primary">{sector.percentage}%</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
