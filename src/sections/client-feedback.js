/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Image from 'components/image';

import Client from 'assets/images/discover.jpg';
import Client2 from 'assets/images/bbw.jpg';

export default function ClientFeedback() {
  return (
    <section sx={{ variant: 'section.feedback' }} id="feedback">
      <Container>
        <SectionHeader
          title="We are champions of sustainability and local economy"
          description="Hashx was formed to help the highly under-served and under-represented market of socially and environmentally conscious brands find a space both offline and online. We create automated touchpoints that delight users."
        />

        <Box sx={styles.thumbWrapper}>
          <Image
            src={Client2}
            alt="Clients Thumbnail"
            width="891"
            height="297"
          />
           <Image
            src={Client}
            alt="Clients Thumbnail"
            width="891"
            height="297"
          />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  thumbWrapper: {
    display: 'flex',
    justifyContent: 'center',
    px: 4,
    pb: [0, null, null, null, null, null, null, null, 6],
    img: {
      height: [100, 'auto'],
    },
  },
};
