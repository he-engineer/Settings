import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';
import { Card, StatusBadge } from '../components';
import { Colors, Typography, Spacing, Layout } from '../constants/tokens';

interface Order {
  id: string;
  restaurantName: string;
  orderDate: string;
  pickupTime: string;
  status: 'preparing' | 'ready' | 'completed' | 'cancelled';
  total: number;
  groupSize: number;
  items: string[];
}

const mockOrders: Order[] = [
  {
    id: '1',
    restaurantName: 'Panda Express',
    orderDate: '2025-08-17',
    pickupTime: '12:30 PM',
    status: 'preparing',
    total: 15.28,
    groupSize: 4,
    items: ['Orange Chicken', 'Fried Rice'],
  },
  {
    id: '2',
    restaurantName: 'Chipotle',
    orderDate: '2025-08-16',
    pickupTime: '1:15 PM',
    status: 'completed',
    total: 12.45,
    groupSize: 3,
    items: ['Chicken Bowl', 'Chips & Guac'],
  },
];

const OrdersScreen = () => {
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const getStatusInfo = (status: Order['status']) => {
    switch (status) {
      case 'preparing':
        return { text: 'Preparing', badgeStatus: 'forming' as const };
      case 'ready':
        return { text: 'Ready for Pickup', badgeStatus: 'ready' as const };
      case 'completed':
        return { text: 'Completed', badgeStatus: 'confirmed' as const };
      default:
        return { text: 'Unknown', badgeStatus: 'forming' as const };
    }
  };

  const renderOrderCard = ({ item }: { item: Order }) => {
    const statusInfo = getStatusInfo(item.status);
    const isActive = item.status === 'preparing' || item.status === 'ready';

    return (
      <TouchableOpacity style={styles.cardContainer}>
        <Card>
          <View style={styles.cardHeader}>
            <View style={styles.headerLeft}>
              <Text style={styles.restaurantName}>{item.restaurantName}</Text>
              <Text style={styles.orderDate}>
                {new Date(item.orderDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })}
                {' • '}
                {item.pickupTime}
              </Text>
            </View>
            <StatusBadge status={statusInfo.badgeStatus}>
              {statusInfo.text}
            </StatusBadge>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.itemsList}>{item.items.join(', ')}</Text>
            <View style={styles.orderDetails}>
              <Text style={styles.groupSize}>Group of {item.groupSize} people</Text>
              <Text style={styles.total}>${item.total.toFixed(2)}</Text>
            </View>
          </View>

          {isActive && (
            <View style={styles.actionHint}>
              <Text style={styles.actionText}>
                {item.status === 'preparing' ? 'Track your order' : 'Ready for pickup!'}
              </Text>
            </View>
          )}
        </Card>
      </TouchableOpacity>
    );
  };

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyTitle}>No orders yet</Text>
      <Text style={styles.emptySubtitle}>Join a group or create one to place your first order</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={renderOrderCard}
        keyExtractor={(item) => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        ListEmptyComponent={renderEmptyState}
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
  listContainer: {
    flexGrow: 1,
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
    fontSize: Typography.fontSize.base,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.neutral[900],
    marginBottom: Spacing[1],
  },
  orderDate: {
    fontSize: Typography.fontSize.sm,
    color: Colors.neutral[500],
  },
  cardContent: {
    marginBottom: Spacing[3],
  },
  itemsList: {
    fontSize: Typography.fontSize.sm,
    color: Colors.neutral[700],
    marginBottom: Spacing[2],
  },
  orderDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  groupSize: {
    fontSize: Typography.fontSize.sm,
    color: Colors.neutral[500],
  },
  total: {
    fontSize: Typography.fontSize.base,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.neutral[900],
  },
  actionHint: {
    paddingTop: Spacing[2],
    borderTopWidth: 1,
    borderTopColor: Colors.neutral[200],
  },
  actionText: {
    fontSize: Typography.fontSize.sm,
    color: Colors.primary[500],
    fontWeight: Typography.fontWeight.medium,
    textAlign: 'center',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing[8],
  },
  emptyTitle: {
    fontSize: Typography.fontSize.h2,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.neutral[900],
    textAlign: 'center',
    marginBottom: Spacing[2],
  },
  emptySubtitle: {
    fontSize: Typography.fontSize.base,
    color: Colors.neutral[500],
    textAlign: 'center',
  },
});

export default OrdersScreen;