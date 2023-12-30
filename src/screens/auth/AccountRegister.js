import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getRole } from '../../redux/appSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ROUTES } from '../../constants';

const AccountRegister = ({ navigation }) => {
    const [username, setUsername] = useState('a')
    const [password, setPassword] = useState('c')
    const [email, setEmail] = useState('a')
    const role = useSelector(getRole)
    const isFullfil = () => {
        return username.length > 0 && password.length > 0 && email.length > 0
    }

    const handleNext = () => {
        if (isFullfil()) {
            navigation.navigate(role === 1 ? ROUTES.AVATAR_REGISTER : ROUTES.DRIVER_INFO_REGISTER)
        }
    }

    return (
        <SafeAreaView className="flex-1 flex-col px-4 py-6">
            <Text className="text-lg font-normal">{`Bước 2/${role === 1 ? '3' : '4'}`}</Text>
            <Text className="text-2xl font-semibold">Thông tin tài khoản</Text>

            <View className="flex-col space-y-3 pt-6">
                <View className="rounded-lg border-2 border-[#D1D1D1] p-4 bg-[#FFFFFF]">
                    <TextInput
                        onChangeText={txt => setPassword(txt)}
                        placeholderTextColor={'#A5A5A5'} placeholder="Tài khoản"
                        value={password}
                    />
                </View>
                <View className="rounded-lg border-2 border-[#D1D1D1] p-4 bg-[#FFFFFF]">
                    <TextInput
                        onChangeText={txt => setUsername(txt)}
                        placeholderTextColor={'#A5A5A5'} placeholder="Mật khẩu"
                        value={username}
                        secureTextEntry={true}
                    />
                </View>
                <View className="rounded-lg border-2 border-[#D1D1D1] p-4 bg-[#FFFFFF]">
                    <TextInput
                        onChangeText={txt => setEmail(txt)}
                        placeholderTextColor={'#A5A5A5'} placeholder="Email"
                        value={email}
                    />
                </View>
            </View>
            <TouchableOpacity
                className="w-full rounded-lg py-4 flex-row justify-center  mt-6 bg-gra"
                style={{ backgroundColor: isFullfil() ? '#3422F1' : 'rgb(156, 163, 175)' }}
                onPress={handleNext}
            >
                <Text className="text-lg font-semibold " style={{ color: isFullfil() ? 'white' : 'rgb(75, 85, 99)' }} >Tiếp</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default AccountRegister