import { create } from "zustand";

const useConversation = create((set) => ({
  selectedconversation: "",
  setconversition: (selectedconversation) => set({ selectedconversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
