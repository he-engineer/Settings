import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Button, Card, Input } from '../components';
import { Colors, Typography, Spacing, Layout, BorderRadius } from '../constants/tokens';

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  totalOrders: number;
  totalSaved: number;
}

const mockProfile: UserProfile = {
  name: 'Sarah Chen',
  email: 'sarah.chen@company.com',
  phone: '+1 (555) 123-4567',
  totalOrders: 23,
  totalSaved: 127.45,
};

const ProfileScreen = () => {
  const [profile, setProfile] = useState<UserProfile>(mockProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(profile.name);
  const [editedPhone, setEditedPhone] = useState(profile.phone);

  const handleSaveProfile = () => {
    setProfile(prev => ({ ...prev, name: editedName, phone: editedPhone }));
    setIsEditing(false);
    Alert.alert('Success', 'Profile updated successfully!');
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Logout', style: 'destructive', onPress: () => {} },
    ]);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Card style={styles.profileCard}>
        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {profile.name.split(' ').map(n => n[0]).join('')}
            </Text>
          </View>
          
          <View style={styles.profileInfo}>
            {isEditing ? (
              <>
                <Input
                  value={editedName}
                  onChangeText={setEditedName}
                  style={styles.editInput}
                />
                <Text style={styles.email}>{profile.email}</Text>
                <Input
                  value={editedPhone}
                  onChangeText={setEditedPhone}
                  placeholder="Phone number"
                  keyboardType="phone-pad"
                  style={styles.editInput}
                />
              </>
            ) : (
              <>
                <Text style={styles.name}>{profile.name}</Text>
                <Text style={styles.email}>{profile.email}</Text>
                <Text style={styles.phone}>{profile.phone}</Text>
              </>
            )}
          </View>
          
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => {
              if (isEditing) {
                handleSaveProfile();
              } else {
                setIsEditing(true);
              }
            }}
          >
            <Text style={styles.editButtonText}>
              {isEditing ? 'Save' : 'Edit'}
            </Text>
          </TouchableOpacity>
        </View>
      </Card>

      <Card style={styles.statsCard}>
        <Text style={styles.sectionTitle}>Your Stats</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{profile.totalOrders}</Text>
            <Text style={styles.statTitle}>Total Orders</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>${profile.totalSaved.toFixed(2)}</Text>
            <Text style={styles.statTitle}>Money Saved</Text>
            <Text style={styles.statSubtitle}>from group discounts</Text>
          </View>
        </View>
      </Card>

      <Card style={styles.settingsCard}>
        <Text style={styles.sectionTitle}>Settings</Text>
        
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Notifications</Text>
          <Text style={styles.settingValue}>On</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Location</Text>
          <Text style={styles.settingValue}>Downtown Office</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Privacy Policy</Text>
          <Text style={styles.settingArrow}>›</Text>
        </TouchableOpacity>
      </Card>

      <View style={styles.actions}>
        <Button variant="secondary" onPress={handleLogout} style={styles.logoutButton}>
          Logout
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
  profileCard: {
    margin: Layout.containerPadding,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary[500],
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing[4],
  },
  avatarText: {
    fontSize: Typography.fontSize.h3,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.neutral[0],
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: Typography.fontSize.h3,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.neutral[900],
    marginBottom: Spacing[1],
  },
  email: {
    fontSize: Typography.fontSize.sm,
    color: Colors.neutral[500],
    marginBottom: Spacing[1],
  },
  phone: {
    fontSize: Typography.fontSize.sm,
    color: Colors.neutral[700],
  },
  editInput: {
    marginBottom: Spacing[2],
    fontSize: Typography.fontSize.sm,
  },
  editButton: {
    paddingVertical: Spacing[2],
    paddingHorizontal: Spacing[3],
    borderRadius: BorderRadius.base,
    backgroundColor: Colors.primary[50],
    borderWidth: 1,
    borderColor: Colors.primary[500],
  },
  editButtonText: {
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.medium,
    color: Colors.primary[500],
  },
  statsCard: {
    marginHorizontal: Layout.containerPadding,
    marginBottom: Spacing[4],
  },
  statsGrid: {
    flexDirection: 'row',
    gap: Spacing[4],
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    padding: Spacing[3],
    backgroundColor: Colors.neutral[50],
    borderRadius: BorderRadius.base,
  },
  statValue: {
    fontSize: Typography.fontSize.h2,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.primary[500],
    marginBottom: Spacing[1],
  },
  statTitle: {
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.medium,
    color: Colors.neutral[700],
    textAlign: 'center',
  },
  statSubtitle: {
    fontSize: Typography.fontSize.xs,
    color: Colors.neutral[500],
    textAlign: 'center',
    marginTop: Spacing[1],
  },
  settingsCard: {
    marginHorizontal: Layout.containerPadding,
    marginBottom: Spacing[4],
  },
  sectionTitle: {
    fontSize: Typography.fontSize.base,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.neutral[900],
    marginBottom: Spacing[3],
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral[100],
  },
  settingText: {
    fontSize: Typography.fontSize.base,
    color: Colors.neutral[900],
  },
  settingValue: {
    fontSize: Typography.fontSize.sm,
    color: Colors.neutral[500],
  },
  settingArrow: {
    fontSize: Typography.fontSize.lg,
    color: Colors.neutral[400],
  },
  actions: {
    padding: Layout.containerPadding,
    paddingBottom: Spacing[8],
  },
  logoutButton: {
    borderColor: Colors.error[500],
  },
});

export default ProfileScreen;