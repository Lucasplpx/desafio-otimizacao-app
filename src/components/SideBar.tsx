import { useMemo } from 'react';
import { List, ListRowRenderer } from 'react-virtualized';
import { Button } from './Button';

interface SideBarProps {
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>;
  selectedGenreId: number;
  buttonClickCallback: (args: any) => void;
}

export function SideBar({
  genres,
  selectedGenreId,
  buttonClickCallback,
}: SideBarProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <Button
          title={genres[index].title}
          iconName={genres[index].name}
          onClick={() => buttonClickCallback(genres[index].id)}
          selected={selectedGenreId === genres[index].id}
        />
      </div>
    );
  };

  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <List
        className='buttons-container'
        height={800}
        rowHeight={80}
        width={300}
        overscanRowCount={5}
        rowCount={genres.length}
        rowRenderer={rowRenderer}
      />
    </nav>
  );
}
