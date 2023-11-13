import React from 'react';
import {
  ConnectivityInfo,
  Feature,
  FeatureDescription,
  FeatureTitle,
  Features,
  Footer,
  GetStarted,
  GetStartedDescription,
  GetStartedTitle,
  HomeContainer,
  Subtitle,
  Title,
} from './HomeStyled';

const Home = () => {
  return (
    <HomeContainer>
      <Title
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Welcome to CyberTask Hub! 🚀
      </Title>
      <Subtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.7 }}
      >
        Explore the Futuristic World of Productivity in true cyberpunk style.
        Immerse yourself in a digital realm where productivity meets the future.
      </Subtitle>
      <Features>
        <Feature
          initial={{ opacity: 0, y: +200, x: '+100vw' }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <FeatureTitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            CyberTask Manager
          </FeatureTitle>
          <FeatureDescription
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.7 }}
          >
            Unleash the power of our advanced task manager, seamlessly blending
            cyberpunk aesthetics with efficient organization. Manage tasks
            effortlessly, from daily to-do lists to long-term projects.
          </FeatureDescription>
        </Feature>
        <Feature
          initial={{ opacity: 0, y: -200, x: '-100vw' }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <FeatureTitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Neon Phonebook
          </FeatureTitle>
          <FeatureDescription
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.7 }}
          >
            Connect with your contacts in style! Our Neon Phonebook lets you
            store and manage your cyber-contacts with flair. Neon-lit profiles
            and a streamlined interface make staying in touch a futuristic
            experience.
          </FeatureDescription>
        </Feature>
      </Features>
      <GetStarted>
        <GetStartedTitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Get Started
        </GetStartedTitle>
        <GetStartedDescription
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.7 }}
        >
          Create your CyberTask Hub account now to embark on a journey of
          unparalleled productivity and style. Whether you're a cyberpunk
          enthusiast or just someone looking for a new, visually appealing way
          to manage tasks, CyberTask Hub is your gateway to the future of
          organization.
        </GetStartedDescription>
      </GetStarted>
      <Footer>
        <ConnectivityInfo
          initial={{
            opacity: 0,

            fontWeight: 300,
          }}
          animate={{
            opacity: 1,
            fontSize: 20,
            fontWeight: 700,
          }}
          transition={{ duration: 0.7 }}
        >
          🌐 Stay Connected, Stay Productive – Welcome to CyberTask Hub!
        </ConnectivityInfo>
      </Footer>
    </HomeContainer>
  );
};

export default Home;
