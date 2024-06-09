import { List, SafeAreaView, TopAppBar } from '@shared/ui';
import { FlatList } from 'react-native';

const data = [
  {
    imageUrl: 'https://imgur.com/yFC0RJw.png',
    name: 'Protect the Young',
    type: 'New Life'
  },
  {
    imageUrl: 'https://imgur.com/3J7hf4Q.png',
    name: 'Survival of the Fittest',
    type: 'New Life'
  },
  {
    imageUrl: 'https://imgur.com/6WbK6SI.png',
    name: 'Graves',
    type: 'Death'
  },
  {
    imageUrl: 'https://imgur.com/UnpL9tO.png',
    name: 'Cannibalize',
    type: 'Death'
  },
  {
    imageUrl: 'https://imgur.com/1XLzyd5.png',
    name: 'Barbaric',
    type: 'Conviction'
  },
  {
    imageUrl: 'https://imgur.com/DwRJvjy.png',
    name: 'Romantic',
    type: 'Conviction'
  },
  {
    imageUrl: 'https://imgur.com/vMSBB8T.png',
    name: 'Accept Darkness',
    type: 'Society'
  },
  {
    imageUrl: 'https://imgur.com/4ccckFI.png',
    name: 'Collective Toll',
    type: 'Society'
  },
]

export const PrinciplePage = () => {
  return (
    <SafeAreaView>
      <TopAppBar variant="small" title="Principles" />
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({ item: { name, type } }) => {
          return <List.Item
            title={name}
            description={type}
          />
        }}
      />
    </SafeAreaView>
  );
};
