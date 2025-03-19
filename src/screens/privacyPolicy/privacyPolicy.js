import { Linking, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';

import Header from '../../components/header/Header';
import styles from './privacyPolicy.style';


export const PrivacyPolicy = ({ navigation }) => {
  const isFocused = useIsFocused();
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  }, [isFocused]);

  const data = '“Personal Data” means as set out in, and will be interpreted in accordance with Data Protection Legislation...';

  const OpenURL = ({ url }) => (
    <TouchableOpacity onPress={() => Linking.openURL(`http://${url}`).catch(err => console.log(err))}>
      <Text style={styles.linkText}>{url}</Text>
    </TouchableOpacity>
  );

  const SectionHeader = ({ title }) => <Text style={styles.sectionHeader}>{title}</Text>;

  const SectionContent = ({ content }) => <Text style={styles.sectionContent}>{content}</Text>;

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
        <SectionHeader title='Privacy Policy' />
        <SectionContent content='At Chef Zone, we believe that anyone who uses the internet should be fully aware of how their information is used...' />
        <SectionContent content="`Not everyone knows how to make a Privacy Policy agreement, especially with CCPA or GDPR or CalOPPA or PIPEDA or Australia's Privacy Act provisions...`" />
        <SectionContent content='At Chef Zone, we believe that anyone who uses the internet should be fully aware of how their information is used...' />

        <View style={styles.rowContainer}>
          <OpenURL url='www.chefzone.co.uk' />
        </View>

        <SectionHeader title='We may collect the following types of information from you:' />
        <SectionHeader title='Personal Identification Information' />
        <SectionContent content='Full name, gender, e-mail address, home address, phone number, date of birth, nationality, utility bill, and a photograph' />

        <SectionHeader title='Location' />
        <SectionContent content='Longitude and latitude coordinates' />

        <SectionHeader title='Government Identifiers' />
        <SectionContent content='Government-issued identity documents such as passport, national identification number, drivers license numbers' />

        <SectionHeader title='Institutional Information' />
        <SectionContent content='Proof of legal formation, personal identification information for all material beneficial owners, and directors' />

        <SectionHeader title='Financial Information' />
        <SectionContent content='Bank account information, payment card information, source of funding, source of wealth' />

        <SectionHeader title='Information from Cookies' />
        <SectionContent content='See our Cookie Notice for more information.' />

        <SectionHeader title='Employment Information' />
        <SectionContent content='Job title, salary wage rate, and company' />

        <SectionHeader title='Communications' />
        <SectionContent content='Survey responses, communications with customer services team including call recordings' />

        <SectionHeader title='Contact Information' />
        <SectionContent content='E-mail address, country, region' />

        <SectionHeader title='Marketing and Research Information' />
        <SectionContent content='Identifiers like IP address, demographic data, browser history, preferences, device type, and inferred interests' />
      </ScrollView>
    </View>
  );
};
