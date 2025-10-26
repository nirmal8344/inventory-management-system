import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useTheme } from '../../contexts/ThemeContext';
import { useToast } from '../../hooks/useToast';
import ProfileEditModal from '../../components/settings/ProfileEditModal'; // Import the new modal

const ThemeToggleSwitch = () => { /* ... same as before ... */ };

const SettingsPage = () => {
    const { addToast } = useToast();
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // For this demo, we will use static data. A real app would get this from a user context.
    const [currentUser, setCurrentUser] = useState({
        id: 1, // Assume the user is ID 1 for this demo
        fullname: 'Admin User',
        email: 'admin@invsys.com',
    });

    const handleSaveProfile = async (updatedUser: { fullname: string; email: string }) => {
        try {
            const response = await fetch(`http://localhost:8080/api/auth/profile/${currentUser.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedUser)
            });
            if (response.ok) {
                const data = await response.json();
                setCurrentUser(data); // Update the state with the saved data
                addToast('Profile updated successfully!', 'success');
            } else {
                throw new Error("Failed to update profile");
            }
        } catch (error) {
            addToast('Error updating profile.', 'error');
        } finally {
            setIsModalOpen(false);
        }
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Settings</h1>
            
            <Card title="Profile Information">
                <div className="flex items-center space-x-4">
                    <img src="https://picsum.photos/80/80" alt="profile" className="h-20 w-20 rounded-full"/>
                    <div>
                        <h2 className="text-xl font-semibold">{currentUser.fullname}</h2>
                        <p className="text-slate-500">{currentUser.email}</p>
                        <Button onClick={() => setIsModalOpen(true)} variant="secondary" size="sm" className="mt-2">Edit Profile</Button>
                    </div>
                </div>
            </Card>
            
            {/* ... Other Cards ... */}
            
            <ProfileEditModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSaveProfile}
                currentUser={currentUser}
            />
        </div>
    );
};

export default SettingsPage;