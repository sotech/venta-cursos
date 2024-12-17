'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import Header from '../sections/header'
import Footer from '../sections/Footer'
import { useSearchParams } from 'next/navigation'

export default function LoginRegister() {
    const searchParams = useSearchParams()
    const initialTab = searchParams.get('tab') || 'login'

    const [activeTab, setActiveTab] = useState(initialTab)

    useEffect(() => {
        const actualTab = searchParams.get('tab') || 'login';
        setActiveTab(actualTab);
    }, [searchParams])

    return (
        <div className="flex flex-col min-h-screen bg-[#FFA726]/10">
            <Header />
            <main className="flex-1 flex items-center justify-center py-12 px-4">
                <div className="w-full max-w-md">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="login">Ingresar</TabsTrigger>
                            <TabsTrigger value="register">Registrarse</TabsTrigger>
                        </TabsList>
                        <div className="mt-6 bg-white rounded-lg shadow-md p-6">
                            <TabsContent value="login">
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" placeholder="email@ejemplo.com" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="password">Contraseña</Label>
                                            <Input id="password" type="password" required />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="remember" />
                                                <label htmlFor="remember" className="text-sm text-gray-600">Recordarme</label>
                                            </div>
                                            <Link href="#" className="text-sm text-[#FFA726] hover:underline">
                                                ¿Olvido la contraseña?
                                            </Link>
                                        </div>
                                        <Button type="submit" className="w-full bg-[#FFB6C6] hover:bg-[#FFB6C6]/90 text-white">
                                            Ingresar
                                        </Button>
                                    </div>
                                </form>
                            </TabsContent>
                            <TabsContent value="register">
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="register-email">Email</Label>
                                            <Input id="register-email" type="email" placeholder="m@example.com" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="register-password">Contraseña</Label>
                                            <Input id="register-password" type="password" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="confirm-password">Confirmar contraseña</Label>
                                            <Input id="confirm-password" type="password" required />
                                        </div>
                                        <Button type="submit" className="w-full bg-[#FFB6C6] hover:bg-[#FFB6C6]/90 text-white">
                                            Registrarsese
                                        </Button>
                                    </div>
                                </form>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </main>
            <Footer />
        </div>
    )
}