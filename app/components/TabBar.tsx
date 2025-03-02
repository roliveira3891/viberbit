// import { View, StyleSheet } from 'react-native';
// import React from 'react';
// import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
// import TabBarButton from './TabBarButton';

// const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
//     const primaryColor = '#0891b2';
//     const greyColor = '#737373';

//     return (
//         <View style={styles.tabbar}>
//             {state.routes.map((route, index) => {
//                 const { options } = descriptors[route.key];
//                 const label =
//                     options.tabBarLabel !== undefined
//                         ? options.tabBarLabel
//                         : options.title !== undefined
//                         ? options.title
//                         : route.name;

//                 if (['_sitemap', '+not-found'].includes(route.name)) return null;

//                 const isFocused = state.index === index;

//                 const onPress = () => {
//                     const event = navigation.emit({
//                         type: 'tabPress',
//                         target: route.key,
//                         canPreventDefault: true,
//                     });

//                     if (!isFocused && !event.defaultPrevented) {
//                         navigation.navigate(route.name, route.params);
//                     }
//                 };

//                 const onLongPress = () => {
//                     navigation.emit({
//                         type: 'tabLongPress',
//                         target: route.key,
//                     });
//                 };

//                 return (
//                     <TabBarButton
//                         key={route.name}
//                         style={styles.tabbarItem}
//                         onPress={onPress}
//                         onLongPress={onLongPress}
//                         isFocused={isFocused}
//                         routeName={route.name}
//                         color={isFocused ? primaryColor : greyColor}
//                         label={label as string}
//                     />
//                 );
//             })}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     tabbar: {
//         position: 'absolute',
//         bottom: 25,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         backgroundColor: 'white',
//         marginHorizontal: 20,
//         paddingVertical: 15,
//         borderRadius: 25,
//         shadowColor: 'black',
//         shadowOffset: { width: 0, height: 10 },
//         shadowRadius: 10,
//         shadowOpacity: 0.1,
//     },
//     tabbarItem: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });

// export default TabBar;