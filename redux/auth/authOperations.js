import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const singUp = createAsyncThunk(
  "auth/singUp",
  async (credentials, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      await updateProfile(auth.currentUser, {
        displayName: credentials.login,
        photoURL: credentials.avatar,
      });
      const user = auth.currentUser;
      console.log("singUp user: ", user);
      return {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
        token: user.accessToken,
      };
    } catch (error) {
      console.log(error);
      if (`${error}`.includes("email-already-in-use")) {
        alert("this email is already in use");
      }
      return rejectWithValue(error.message);
    }
  }
);

export const singIn = createAsyncThunk(
  "auth/SingIn",
  async (credentials, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      const { user } = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      console.log("SingIn: ", user);
      return {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
        token: user.accessToken,
      };
    } catch (error) {
      console.log(error);
      if (
        `${error}`.includes("invalid-email") ||
        `${error}`.includes("wrong-password")
      ) {
        alert("email and/or password are wrong");
      }
      return rejectWithValue(error.message);
    }
  }
);

export const singOut = createAsyncThunk(
  "auth/SingOut",
  async (_, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      await signOut(auth);
      console.log("signOut");
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
