"use client";
import { User } from "@supabase/supabase-js";
import { createContext, useEffect, useState } from "react";
import {
  useSessionContext,
  useUser as useSupabaseUser,
} from "@supabase/auth-helpers-react";

import { UserDetails } from "@/entities/user/models";

type UserContextType = {
  accessToken: string | null;
  user: User | null;
  userDetails: UserDetails | null;
  isLoading: boolean;
  // like, 장바구니
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export interface UserProviderProps {
  [propnames: string]: any;
}

export const UserContextProvider = (props: UserProviderProps) => {
  const {
    session,
    isLoading: isLoadingUser,
    supabaseClient: supabase,
  } = useSessionContext();
  const user = useSupabaseUser();
  const accessToken = session?.access_token ?? null;
  const [isLoadingData, setIsLoadingData] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  const getUserDetails = () => supabase.from("users").select("*").single();

  useEffect(() => {
    if (user && !userDetails && !isLoadingData) {
      setIsLoadingData(true);
      getUserDetails().then(({ data }) => {
        setUserDetails(data);
        setIsLoadingData(false);
      });
    } else if (!user && userDetails) {
      setUserDetails(null);
    }
  }, [user, isLoadingData]);

  const value = {
    accessToken,
    user,
    userDetails,
    isLoading: isLoadingUser || isLoadingData,
  };

  return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
  const context = UserContext;
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
