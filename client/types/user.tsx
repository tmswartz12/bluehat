enum ONBOARDING_STATUS {
  userInfo = "userInfo",
  businessInfo = "businessInfo",
  complete = "complete",
}
export type User = {
  _id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  isAdmin?: boolean;
  phone?: string;
  onboardingStatus: ONBOARDING_STATUS;
};
