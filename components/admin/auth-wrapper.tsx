// components/admin/auth-wrapper.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Key, Unlock, Loader2, XCircle, CheckCircle } from 'lucide-react';

export function AuthWrapper({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [input, setInput] = useState("");
    const [status, setStatus] = useState<"idle" | "error" | "success" | "loading">("idle");

    const handleAuth = () => {
        if (input === process.env.NEXT_PUBLIC_APP_SECRET) {
            setStatus("success");
            setTimeout(() => setIsAuthenticated(true), 800);
        } else {
            setStatus("error");
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="flex items-center justify-center px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                    className="p-8 w-full max-w-md rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden"
                >
                    {/* Decorative elements */}
                    <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-orange-100 dark:bg-pink-900/30 blur-xl"></div>
                    <div className="absolute -bottom-12 -left-12 w-24 h-24 rounded-full bg-pink-100 dark:bg-orange-900/30 blur-xl"></div>

                    <div className="relative z-10">
                        <div className="flex flex-col items-center mb-8">
                            <div className="p-3 mb-4 rounded-full bg-gray-100 dark:bg-gray-700 shadow-inner">
                                <Lock className="w-8 h-8 text-gray-700 dark:text-gray-200" />
                            </div>
                            <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Admin Portal</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                Enter your secret key to continue
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-4"
                        >
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="••••••••••••"
                                    className="w-full px-4 py-3 pl-12 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-sm focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleAuth()}
                                    autoComplete="off"
                                    autoFocus
                                />
                                <Key className="absolute left-4 top-3.5 w-5 h-5 text-gray-400 dark:text-gray-500" />
                            </div>

                            <motion.button
                                whileTap={{ scale: 0.98 }}
                                whileHover={{ scale: 1.02 }}
                                onClick={handleAuth}
                                className="w-full bg-gradient-to-r from-orange-500 via-pink-600 to-red-500 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Verifying...
                                    </>
                                ) : (
                                    <>
                                        <Unlock className="w-4 h-4" />
                                        Authenticate
                                    </>
                                )}
                            </motion.button>

                            <AnimatePresence mode="wait">
                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mt-2 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 text-sm flex items-center gap-2"
                                    >
                                        <XCircle className="w-4 h-4 flex-shrink-0" />
                                        <span>Invalid secret key. Please try again.</span>
                                    </motion.div>
                                )}

                                {status === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mt-2 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-300 text-sm flex items-center gap-2"
                                    >
                                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                                        <span>Authentication successful! Redirecting...</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                For authorized personnel only. Unauthorized access prohibited.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        );
    }

    return <>{children}</>;
}