import LoginForm from '@/src/components/LoginForm';

export default function Login() {
    return (
        <div className="flex justify-center items-center w-full min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex justify-center items-center w-full">
                <div className="w-[400px]">
                    <LoginForm/>
                </div>
            </main>
        </div>
    );
}
