import { Text, View } from 'react-native';
import React, { memo } from 'react';

import styles from './Title.style';


const Title = ({heading, paragraph, additionalStyle}) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.heading, additionalStyle]}>
                {heading}
            </Text>
            {paragraph && (
                <Text style={styles.paragraph}>
                    {paragraph}
                </Text>
            )}
        </View>
    )
}

export default memo(Title);