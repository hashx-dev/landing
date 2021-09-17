/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';

const data = [
  {
    id: 1,
    title: 'Join our platform',
    text:
      'Like-minded professionals and organizations are waiting to partner up and grow together. Take the leap. Sign up. ',
  },
  {
    id: 2,
    title: 'Represent your business',
    text:
      'Show off your products and services in a new and evolved format that is optimized for engagement and collaboration.',
  },
  {
    id: 3,
    title: 'Partner up and Profit',
    text:
      'Inspire others to engage with your business, and lay down the foundations for mutual profit.',
  },
];

export default function WorkFlow() {
  return (
    <section sx={{ variant: 'section.workflow' }}>
      <Container>
        <SectionHeader
          title="Ready to Rock the Retail Revolution?"
          description="Join our beta program to participate in the new phygital economy. Here's how -	"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={{ variant: 'text.heading' }}>{item.title}</Heading>
                <Text sx={styles.wrapper.description}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 3],
    pb: [0, null, null, null, null, null, null, null, 5],
    mb: -1,
    gridGap: [
      '40px',
      '45px',
      '45px 30px',
      null,
      '60px 30px',
      '50px 40px',
      null,
      '75px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: ['column', null, null, 'row'],
    textAlign: ['center', null, 'left'],
    px: [0, 5, 0],
  },

  iconBox: {
    flexShrink: 0,
    mb: [4, null, null, 0],
    fontSize: [8, 9, null, null, 10, null, null, 11],
    fontWeight: 300,
    fontFamily: 'special',
    color: 'heading',
    lineHeight: 1,
    letterSpacing: 'heading',
    mr: ['auto', null, 0, 4, null, null, null, 5],
    ml: ['auto', null, 0],
    mt: [0, null, null, -1],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    description: {
      fontSize: [1, 2],
      fontWeight: 'body',
      lineHeight: 1.9,
      pt: 2,
    },
  },
};
