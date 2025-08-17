import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';
import { Button, Card, StatusBadge } from '../components';
import { Colors, Typography, Spacing, Layout } from '../constants/tokens';

interface GroupItem {
  id: string;
  restaurantName: string;
  cuisine: string;
  pickupTime: string;
  currentMembers: number;
  maxMembers: number;
  distance: string;
  groupDiscount: string;
  status: 'forming' | 'ready' | 'full';
  timeRemaining: string;
}

const mockGroups: GroupItem[] = [
  {
    id: '1',
    restaurantName: 'Panda Express',
    cuisine: 'Chinese',
    pickupTime: '12:30 PM',
    currentMembers: 3,
    maxMembers: 6,
    distance: '0.2 mi',
    groupDiscount: '15% off $50+',
    status: 'forming',
    timeRemaining: '8 min left',
  },
  {
    id: '2',
    restaurantName: 'Chipotle',
    cuisine: 'Mexican',
    pickupTime: '12:45 PM',
    currentMembers: 4,
    maxMembers: 5,
    distance: '0.1 mi',
    groupDiscount: '20% off $40+',
    status: 'ready',
    timeRemaining: '2 min left',
  },
];

const GroupDiscoveryScreen = () => {
  const [groups, setGroups] = useState<GroupItem[]>(mockGroups);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const renderGroupCard = ({ item }: { item: GroupItem }) => (
    <TouchableOpacity style={styles.cardContainer}>
      <Card>
        <View style={styles.cardHeader}>
          <View style={styles.headerLeft}>
            <Text style={styles.restaurantName}>{item.restaurantName}</Text>
            <Text style={styles.cuisine}>{item.cuisine}</Text>
          </View>
          <StatusBadge status={item.status}>
            {item.status === 'forming' && 'Forming'}
            {item.status === 'ready' && 'Ready'}
            {item.status === 'full' && 'Full'}
          </StatusBadge>
        </View>
        
        <View style={styles.cardContent}>
          <View style={styles.timeInfo}>
            <Text style={styles.pickupTime}>{item.pickupTime}</Text>
            <Text style={styles.timeRemaining}>{item.timeRemaining}</Text>
          </View>
          
          <View style={styles.groupInfo}>
            <Text style={styles.members}>{item.currentMembers}/{item.maxMembers} people</Text>
            <Text style={styles.distance}>{item.distance} away</Text>
          </View>
          
          <Text style={styles.discount}>{item.groupDiscount}</Text>
        </View>
        
        <View style={styles.cardActions}>
          <Button variant={item.status === 'full' ? 'secondary' : 'primary'}>
            {item.status === 'full' ? 'Join Waitlist' : 'Join Group'}
          </Button>
        </View>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.locationText}>📍 Near Downtown Office</Text>
        <Button variant="secondary">Filter</Button>
      </View>
      
      <FlatList
        data={groups}
        renderItem={renderGroupCard}
        keyExtractor={(item) => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral[50],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Layout.containerPadding,
    backgroundColor: Colors.neutral[0],
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral[300],
  },
  locationText: {
    fontSize: Typography.fontSize.sm,
    color: Colors.neutral[700],
  },
  listContainer: {
    padding: Layout.containerPadding,
  },
  cardContainer: {
    marginBottom: Spacing[3],
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing[3],
  },
  headerLeft: {
    flex: 1,
  },
  restaurantName: {
    fontSize: Typography.fontSize.h3,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.neutral[900],
    marginBottom: Spacing[1],
  },
  cuisine: {
    fontSize: Typography.fontSize.sm,
    color: Colors.neutral[500],
  },
  cardContent: {
    marginBottom: Spacing[4],
  },
  timeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing[2],
  },
  pickupTime: {
    fontSize: Typography.fontSize.base,
    fontWeight: Typography.fontWeight.medium,
    color: Colors.neutral[900],
  },
  timeRemaining: {
    fontSize: Typography.fontSize.sm,
    color: Colors.warning[600],
    fontWeight: Typography.fontWeight.medium,
  },
  groupInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing[2],
  },
  members: {
    fontSize: Typography.fontSize.sm,
    color: Colors.neutral[700],
  },
  distance: {
    fontSize: Typography.fontSize.sm,
    color: Colors.neutral[500],
  },
  discount: {
    fontSize: Typography.fontSize.sm,
    color: Colors.success[600],
    fontWeight: Typography.fontWeight.medium,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default GroupDiscoveryScreen;