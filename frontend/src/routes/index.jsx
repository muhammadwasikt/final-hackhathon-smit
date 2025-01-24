import { AppLayout, AuthLayout, EmailCheckPage, ForgotPassword, OTPVerification, ResendOtp, ResetPassword, SignIn, SignUp } from '../utils/imports/import';


const routes = [
    {
        path: '/',
        element: <AppLayout />,
        children: []
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/sign-in',
                element: <SignIn />
            },
            {
                path: '/auth/sign-up',
                element: <SignUp />
            },
            {
                path: '/forgot-password',
                element: <ForgotPassword />
            },
            {
                path: '/reset-password/:token',
                element: <ResetPassword />
            },
            {
                path: '/password-reset-email',
                element: <EmailCheckPage />
            },
            {
                path: '/email-verification/:token',
                element: <OTPVerification />
            },
            {
                path: '/resend-otp',
                element: <ResendOtp />
            }
        ]
    },
    {
        path: '*',
        element: <h1>Page Not Found</h1>
    }

]


export default routes;