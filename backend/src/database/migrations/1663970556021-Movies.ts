import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const initialMovies = [
  {
    title: 'Lock, stock and two smoking barrels',
    description:
      'Eddy persuades his three pals to pool money for a vital poker game against a powerful local mobster, Hatchet Harry. Eddy loses, after which Harry gives him a week to pay back 500,000 pounds.',
    type: '1',
    year: 1998,
    rating: '18+',
    score: 'IMDb 8.2',
    country: 'UK',
    image: 'lock-stock.jpeg',
  },
  {
    title: 'The Irishman',
    description:
      "Marine Briggs must deliver a service dog named Lulu to California. The assignment turns out to be a tricky one. A light ride along the Pacific Coast turns into a hell of a trip, where it's unclear who's driving who.",
    type: '1',
    year: 2019,
    rating: 'R',
    score: 'IMDb 7.8',
    country: 'USA',
    image: 'irishman.jpg',
  },
  {
    title: 'Thor: Love and Thunder',
    description:
      'Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.',
    type: '1',
    year: 2022,
    rating: 'PG-13',
    score: 'IMDb 6.4',
    country: 'USA',
    image: 'thor.jpeg',
  },
  {
    title: 'Uncharted',
    description:
      'Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor "Sully" Sullivan to recover a fortune amassed by Ferdinand Magellan, and lost 500 years ago by the House of Moncada.',
    type: '1',
    year: 2022,
    rating: '12+',
    score: 'IMDb 6.3',
    country: 'USA',
    image: 'uncharted.jpeg',
  },
  {
    title: 'Django Unchained',
    description:
      'With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.',
    type: '1',
    year: 2012,
    rating: '18+',
    score: 'IMDb 8.4',
    country: 'USA',
    image: 'django.jpeg',
  },
  {
    title: 'The Gentlemen',
    description:
      'An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.',
    type: '1',
    year: 2019,
    rating: 'R',
    score: 'IMDb 7.8',
    country: 'UK',
    image: 'gentlemen.jpeg',
  },
  {
    title: 'Iron Man',
    description:
      'Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor "Sully" Sullivan to recover a fortune amassed by Ferdinand Magellan, and lost 500 years ago by the House of Moncada.',
    type: '1',
    year: 2008,
    rating: '12+',
    score: 'IMDb 7.9',
    country: 'USA',
    image: 'ironman.jpeg',
  },
  {
    title: 'Pulp Fiction',
    description:
      'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    type: '1',
    year: 1994,
    rating: '18+',
    score: 'IMDb 8.9',
    country: 'USA',
    image: 'pulp-fiction.jpeg',
  },
  {
    title: 'Fight Club',
    description:
      'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
    type: '1',
    year: 1999,
    rating: '18+',
    score: 'IMDb 8.8',
    country: 'USA',
    image: 'fight-club.jpg',
  },
  {
    title: 'Once Upon a Time... in Hollywood',
    description:
      "A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    type: '1',
    year: 2019,
    rating: '18+',
    score: 'IMDb 7.6',
    country: 'USA',
    image: 'hollywood.jpg',
  },
  {
    title: 'The Batman',
    description:
      "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    type: '1',
    year: 2022,
    rating: '16+',
    score: 'IMDb 7.9',
    country: 'USA',
    image: 'batman.jpg',
  },
  {
    title: 'Forrest Gump',
    description:
      'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
    type: '1',
    year: 1994,
    rating: '0+',
    score: 'IMDb 8.8',
    country: 'USA',
    image: 'forrest-gump.jpg',
  },
  {
    title: 'Stranger Things',
    description:
      'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
    type: '2',
    year: 2016,
    rating: '16+',
    score: 'IMDb 8.7',
    country: 'USA',
    image: 'stranger-things.jpeg',
  },
  {
    title: 'Lupin',
    description:
      'Inspired by the adventures of Arsène Lupin, gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family.',
    type: '2',
    year: 2021,
    rating: 'TV-MA',
    score: 'IMDb 7.5',
    country: 'France',
    image: 'lupin.png',
  },
  {
    title: 'Black Mirror',
    description:
      "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
    type: '2',
    year: 2011,
    rating: '18+',
    score: 'IMDb 8.8',
    country: 'UK',
    image: 'black-mirror.jpeg',
  },
  {
    title: 'Game of Thrones',
    description:
      'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
    type: '2',
    year: 2011,
    rating: '18+',
    score: 'IMDb 9.2',
    country: 'USA',
    image: 'game-of-thrones.jpeg',
  },
  {
    title: 'Sherlock',
    description:
      'A modern update finds the famous sleuth and his doctor partner solving crime in 21st-century London.',
    type: '2',
    year: 2010,
    rating: '16+',
    score: 'IMDb 9.1',
    country: 'UK',
    image: 'sherlock.jpg',
  },
  {
    title: "The Queen's Gambit",
    description:
      'Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.',
    type: '2',
    year: 2020,
    rating: 'TV-MA',
    score: 'IMDb 8.6',
    country: 'USA',
    image: 'queens-gambit.jpeg',
  },
  {
    title: 'House of the Dragon',
    description:
      'An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.',
    type: '2',
    year: 2022,
    rating: '18+',
    score: 'IMDb 8.7',
    country: 'USA',
    image: 'house-of-dragon.jpg',
  },
  {
    title: 'Breaking Bad',
    description:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    type: '2',
    year: 2008,
    rating: '18+',
    score: 'IMDb 9.5',
    country: 'USA',
    image: 'breaking-bad.jpg',
  },
  {
    title: 'The Boys',
    description:
      'A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.',
    type: '2',
    year: 2019,
    rating: '18+',
    score: 'IMDb 8.7',
    country: 'USA',
    image: 'the-boys.jpg',
  },
  {
    title: 'Peaky Blinders',
    description:
      'A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.',
    type: '2',
    year: 2013,
    rating: '18+',
    score: 'IMDb 8.8',
    country: 'UK',
    image: 'peaky-blinders.jpg',
  },
  {
    title: 'The Office',
    description:
      'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.',
    type: '2',
    year: 2005,
    rating: '16+',
    score: 'IMDb 9.0',
    country: 'USA',
    image: 'theoffice.jpg',
  },
  {
    title: 'Peacemaker',
    description:
      'Peacemaker returns home after recovering from his encounter with Bloodsport - only to discover that his freedom comes at a price.',
    type: '2',
    year: 2022,
    rating: '18+',
    score: 'IMDb 8.3',
    country: 'USA',
    image: 'peacemaker.jpg',
  },
  {
    title: 'The Squid Game',
    description:
      "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes. A survival game that has a whopping 45.6 billion-won prize at stake.",
    type: '2',
    year: 2022,
    rating: '18+',
    score: 'IMDb 8.0',
    country: 'South Korea',
    image: 'squid-game.jpeg',
  },
  {
    title: 'Inside Out',
    description:
      'After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.',
    type: '3',
    year: 2015,
    rating: '6+',
    score: 'IMDb 8.2',
    country: 'USA',
    image: 'inside-out.jpeg',
  },
  {
    title: 'Minions: The Rise of Gru',
    description:
      "The untold story of one twelve-year-old's dream to become the world's greatest supervillain.",
    type: '3',
    year: 2022,
    rating: '6+',
    score: 'IMDb 6.6',
    country: 'USA',
    image: 'minions.jpeg',
  },
  {
    title: 'Hotel Transylvania',
    description:
      "Dracula, who operates a high-end resort away from the human world, goes into overprotective mode when a boy discovers the resort and falls for the count's teenaged daughter.",
    type: '3',
    year: 2012,
    rating: '6+',
    score: 'IMDb 7.0',
    country: 'USA',
    image: 'hotel-transylvania.jpg',
  },
  {
    title: 'The SpongeBob Movie: Sponge on the Run',
    description:
      "After SpongeBob's beloved pet snail Gary is snail-napped, he and Patrick embark on an epic adventure to The Lost City of Atlantic City to bring Gary home.",
    type: '3',
    year: 2020,
    rating: '6+',
    score: 'IMDb 5.9',
    country: 'USA',
    image: 'spongebob.jpg',
  },
  {
    title: 'Zootopia',
    description:
      'In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.',
    type: '3',
    year: 2016,
    rating: '6+',
    score: 'IMDb 8.0',
    country: 'USA',
    image: 'zootopia.jpg',
  },
  {
    title: 'Spider-Man: Into the Spider-Verse',
    description:
      'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.',
    type: '3',
    year: 2018,
    rating: '6+',
    score: 'IMDb 8.4',
    country: 'USA',
    image: 'spider-verse.jpg',
  },
  {
    title: 'WALL·E',
    description:
      'In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.',
    type: '3',
    year: 2008,
    rating: '0+',
    score: 'IMDb 8.4',
    country: 'USA',
    image: 'wall-e.jpg',
  },
  {
    title: 'Toy Story',
    description:
      "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
    type: '3',
    year: 1995,
    rating: '6+',
    score: 'IMDb 8.3',
    country: 'USA',
    image: 'toy-story.jpg',
  },
  {
    title: 'The Incredibles',
    description:
      'While trying to lead a quiet suburban life, a family of undercover superheroes are forced into action to save the world.',
    type: '3',
    year: 2004,
    rating: '12+',
    score: 'IMDb 8.0',
    country: 'USA',
    image: 'the-incredibles.jpg',
  },
  {
    title: 'Ratatouille',
    description:
      'A rat who can cook makes an unusual alliance with a young kitchen worker at a famous Paris restaurant.',
    type: '3',
    year: 2007,
    rating: '0+',
    score: 'IMDb 8.1',
    country: 'USA',
    image: 'ratatouille.jpg',
  },
  {
    title: 'Up',
    description:
      '78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.',
    type: '3',
    year: 2009,
    rating: '0+',
    score: 'IMDb 8.3',
    country: 'USA',
    image: 'up.jpg',
  },
];

export class movies1663966186221 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'movie',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'type',
            type: 'varchar',
          },
          {
            name: 'year',
            type: 'int',
          },
          {
            name: 'rating',
            type: 'varchar',
          },
          {
            name: 'score',
            type: 'varchar',
          },
          {
            name: 'country',
            type: 'varchar',
          },
          {
            name: 'image',
            type: 'varchar',
          },
        ],
      }),
    );
    await queryRunner.manager.insert('movie', initialMovies);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('movie');
  }
}
