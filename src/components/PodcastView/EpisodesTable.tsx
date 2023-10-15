import { Typography } from '@mui/material';
import { FC } from 'react';
import tw from 'twin.macro';
import Table, { Column } from '~/components/ui/Table';
import { Episode } from '~/entities';
import { PlayerCell } from '../Player';

const TextCell = tw(({ children, ...props }) => (
  <Typography variant="body2" {...props}>
    {children}
  </Typography>
))`text-ellipsis line-clamp-3`;

const TitleCell = tw(TextCell)`min-w-[150px]`;

const columns: Column<Episode>[] = [
  {
    name: '#',
    sortable: false,
    content: (episode: Episode) => <PlayerCell episodeId={episode.id} />,
  },
  {
    name: 'Title',
    content: (episode: Episode) => <TitleCell>{episode.title}</TitleCell>,
  },
  {
    name: 'Topic',
    content: (episode: Episode) => <TextCell>{episode.description}</TextCell>,
    hideSmallDevice: true,
  },
  { name: 'Released', content: (episode: Episode) => episode.releaseDate },
  { name: 'Duration', content: (episode: Episode) => episode.duration },
];

type Props = { data: Episode[] };
const PodcastsTable: FC<Props> = ({ data }) => <Table columns={columns} data={data} />;

export default PodcastsTable;
