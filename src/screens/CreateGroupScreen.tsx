import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Button, Input, Card } from '../components';
import { Colors, Typography, Spacing, Layout, BorderRadius } from '../constants/tokens';

const mockRestaurants = [
  { id: '1', name: 'Panda Express', cuisine: 'Chinese', distance: '0.2 mi', groupDiscount: '15% off $50+' },
  { id: '2', name: 'Chipotle', cuisine: 'Mexican', distance: '0.1 mi', groupDiscount: '20% off $40+' },
  { id: '3', name: 'Salad Works', cuisine: 'Healthy', distance: '0.3 mi', groupDiscount: '10% off $30+' },
];

const timeSlots = ['12:00 PM', '12:15 PM', '12:30 PM', '12:45 PM', '1:00 PM', '1:15 PM'];

const CreateGroupScreen = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [maxMembers, setMaxMembers] = useState<string>('4');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleCreateGroup = async () => {
    if (!selectedRestaurant || !selectedTime) {
      Alert.alert('Missing Information', 'Please select a restaurant and pickup time.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Group Created!', 'Your group has been created. Others can now join.');
    }, 1500);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Choose Restaurant</Text>
        <Text style={styles.sectionSubtitle}>Select a restaurant for your group order</Text>
        {mockRestaurants.map((restaurant) => (
          <TouchableOpacity
            key={restaurant.id}
            onPress={() => setSelectedRestaurant(restaurant.id)}
          >
            <Card style={[
              styles.restaurantCard,
              selectedRestaurant === restaurant.id ? styles.selectedCard : undefined,
            ].filter(Boolean) as any}>
              <View style={styles.restaurantHeader}>
                <Text style={styles.restaurantName}>{restaurant.name}</Text>
                <Text style={styles.restaurantCuisine}>{restaurant.cuisine}</Text>
              </View>
              <View style={styles.restaurantInfo}>
                <Text style={styles.distance}>{restaurant.distance}</Text>
                <Text style={styles.discount}>{restaurant.groupDiscount}</Text>
              </View>
            </Card>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pickup Time</Text>
        <Text style={styles.sectionSubtitle}>When should the group pick up the order?</Text>
        <View style={styles.timeGrid}>
          {timeSlots.map((time) => (
            <TouchableOpacity
              key={time}
              style={[
                styles.timeSlot,
                selectedTime === time && styles.selectedTimeSlot,
              ]}
              onPress={() => setSelectedTime(time)}
            >
              <Text style={[
                styles.timeSlotText,
                selectedTime === time && styles.selectedTimeSlotText,
              ]}>
                {time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Group Settings</Text>
        <Input
          label="Maximum Group Size"
          value={maxMembers}
          onChangeText={setMaxMembers}
          keyboardType="numeric"
          placeholder="2-8 people"
        />
        <Input
          label="Optional Message"
          value={message}
          onChangeText={setMessage}
          placeholder="Add a message for your group..."
          multiline
          numberOfLines={3}
          style={styles.messageInput}
        />
      </View>

      <View style={styles.actions}>
        <Button
          onPress={handleCreateGroup}
          loading={loading}
          disabled={!selectedRestaurant || !selectedTime}
          style={styles.createButton}
        >
          Create Group
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral[50],
  },
  section: {
    padding: Layout.containerPadding,
    backgroundColor: Colors.neutral[0],
    marginBottom: Spacing[2],
  },
  sectionTitle: {
    fontSize: Typography.fontSize.h3,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.neutral[900],
    marginBottom: Spacing[1],
  },
  sectionSubtitle: {
    fontSize: Typography.fontSize.sm,
    color: Colors.neutral[500],
    marginBottom: Spacing[4],
  },
  restaurantCard: {
    marginBottom: Spacing[3],
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedCard: {
    borderColor: Colors.primary[500],
    backgroundColor: Colors.primary[50],
  },
  restaurantHeader: {
    marginBottom: Spacing[2],
  },
  restaurantName: {
    fontSize: Typography.fontSize.base,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.neutral[900],
    marginBottom: Spacing[1],
  },
  restaurantCuisine: {
    fontSize: Typography.fontSize.sm,
    color: Colors.neutral[500],
  },
  restaurantInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  distance: {
    fontSize: Typography.fontSize.sm,
    color: Colors.neutral[700],
  },
  discount: {
    fontSize: Typography.fontSize.sm,
    color: Colors.success[600],
    fontWeight: Typography.fontWeight.medium,
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing[2],
  },
  timeSlot: {
    paddingVertical: Spacing[3],
    paddingHorizontal: Spacing[4],
    borderRadius: BorderRadius.base,
    borderWidth: 2,
    borderColor: Colors.neutral[300],
    backgroundColor: Colors.neutral[0],
    minWidth: '30%',
    alignItems: 'center',
  },
  selectedTimeSlot: {
    borderColor: Colors.primary[500],
    backgroundColor: Colors.primary[500],
  },
  timeSlotText: {
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.medium,
    color: Colors.neutral[700],
  },
  selectedTimeSlotText: {
    color: Colors.neutral[0],
  },
  messageInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  actions: {
    padding: Layout.containerPadding,
    backgroundColor: Colors.neutral[0],
  },
  createButton: {
    marginBottom: Spacing[6],
  },
});

export default CreateGroupScreen;