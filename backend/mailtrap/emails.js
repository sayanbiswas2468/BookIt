import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"
import { mailtrapClient, sender } from "./mailtrap.Config.js";
export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }]
    try {
        const responce = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification"
        })
        console.log("Email send successfully", responce);
    } catch (error) {
        console.error(`Error sending verification`, error);
        throw new Error(`Error sending verification email ${error}`)
    }
}


export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }];
    try {
        const responce = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "d3c3cebd-2ead-45e8-9ebf-b514686a1759",
            template_variables: {
                name: "name",
                company_info_name: "Auth Company"
            }
        })

        console.log("Welcome email sent successfully", responce);
    }
    catch (error) {
        console.error(`Error sending welcome email`, error);
        throw new Error(`Error sending welcome email: ${error}`)

    }
}

export const sendPasswordResetEmail = async (email, resetURL) => {
    const recipient = [{ email }]
    try {
        const responce = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset"
        })
    }
    catch (error) {
        console.error(`Error sending password reset email`, error);
        throw new Error(`Error sending password reset email: ${error}`)
    }
}

export const sendResetSuccessEmail = async (email) => {
    const recipient = [{ email }]
    try {
        const responce = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: 'Password reset successfull',
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password reset"
        })
        console.log("Password reset email sent successfully");

    }
    catch (error) {
        console.log(`Error sending password reset success email`, error);
        throw new Error(`Error sending password reset success email: ${error}`)

    }
}