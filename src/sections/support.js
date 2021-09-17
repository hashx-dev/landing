/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Image from 'components/image';


import SupportTeam from 'assets/images/support-thumb.png';
import B1 from 'assets/images/Logos/alch.jpeg';
import B2 from 'assets/images/Logos/bbw.png';
import B3 from 'assets/images/Logos/astu.png';
import B4 from 'assets/images/Logos/onco.jpeg';
import B5 from 'assets/images/Logos/eg.png';

export default function Support() {
  return (
    <section sx={{ variant: 'section.support' }} id="support">
      <Container>
        <SectionHeader
          title="Meet our happy clients"
          description="Please take a moment to check out these amazing brands. If you have a socially or environmentally conscious enterprise, we'd love to hear from you!"
        />

        <Box sx={styles.thumbWrapper}>
	 
	  <a href="https://bubblenutwash.com/" id="bubblenut" >
          <Image
            src={B2}
            alt="Bubblenut Wash"
            width="992"
            height="531"
          />
	 </a>
	  <a href="https://astueco.com/" id="astu" >
          <Image
            src={B3}
            alt="Astu Eco"
            width="992"
            height="531"
          />
	 </a>
	 <a href="https://www.instagram.com/alchimia_organics/" id="alchimia" >
          <Image
            src={B1}
            alt="Alchimia Organics"
            width="992"
            height="531"
          />
	 </a>

	 <a href="https://oncohappy.com/" id="oncohappy" >
          <Image
            src={B4}
            alt="Onco Happy"
            width="992"
            height="531"
          />
	</a>

	 <a href="https://energy-guru.com/" id="energyguru" >
          <Image
            src={B5}
            alt="Energy Guru"
            width="992"
            height="531"
          />
	</a>
		

        </Box>
	<br/><br/>
      </Container>
    </section>
  );
}

const styles = {
  thumbWrapper: {
    display: 'flex',
    justifyContent: 'center',
    img: {
      height: [180, 'auto'],
    },
  },
};
