// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { create } from "zustand";
// import { createJSONStorage, persist } from "zustand/middleware";




// export type Address = {
//   id: string;
//   type: 'Home' | 'Work' | 'Other';
//   name: string;
//   mobile: string;
//   flatNo: string;
//   blockName: string;
//   buildingName: string;
//   street: string;
//   landmark: string;
//   pincode: string;
//   locality: string;
// };

// type AddressState = {
//   addresses: Address[];
//   selectedAddressId: string | null;
//   addAddress: (address: Omit<Address, 'id'>) => void;
//   updateAddress: (id: string, address: Partial<Address>) => void;
//   removeAddress: (id: string) => void;
//   selectAddress: (id: string) => void;
// };

// export const useAddressStore = create<AddressState>()(
//   persist(
//     (set, get) => ({
        
//         addresses: [
//         {
//           id: '1',
//           type: 'Home',
//           name: 'Sujan',
//           mobile: '+91 9827228928',
//           flatNo: '',
//           blockName: 'Bangalore, Dasarahalli',
//           buildingName: '',
//           street: '',
//           landmark: '',
//           pincode: '560024',
//           locality: 'Bangalore',
//         },
//         {
//           id: '2',
//           type: 'Home',
//           name: '',
//           mobile: '+91 9882919289',
//           flatNo: '',
//           blockName: 'Bangalore, Coffee Board',
//           buildingName: '',
//           street: '',
//           landmark: '',
//           pincode: '560024',
//           locality: 'Bangalore',
//         },
//       ],
//       selectedAddressId: '1',

// addAddress: (newAddress) => {
//   const id = Date.now().toString();

//   set((state) => ({
//     addresses: [
//       ...state.addresses,
//       { ...newAddress, id },
//     ],
//   }));
// },

// updateAddress: (id, updated) =>
//   set((state) => ({
//     addresses: state.addresses.map((addr) =>
//       addr.id === id ? { ...addr, ...updated } : addr
//     ),
//   })),

// removeAddress: (id) =>
//   set((state) => ({
//     addresses: state.addresses.filter((addr) => addr.id !== id),
//   })),

//   selectAddress : (id)=> set({selectedAddressId : id})
//     }),
//     {
//         name: 'address-storage',
//         storage: createJSONStorage(()=> AsyncStorage)
//     }
// )
// )




import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Address = {
  id: string;
  type: 'Home' | 'Work' | 'Other';
  name: string;
  mobile: string;
  flatNo: string;
  blockName: string;
  buildingName: string;
  street: string;
  landmark: string;
  pincode: string;
  locality: string;
};

type AddressState = {
  addresses: Address[];
  selectedAddressId: string | null;
  addAddress: (address: Omit<Address, 'id'>) => void;
  updateAddress: (id: string, address: Partial<Address>) => void;
  removeAddress: (id: string) => void;
  selectAddress: (id: string) => void;
};

export const useAddressStore = create<AddressState>()(
  persist(
    (set, get) => ({
      addresses: [
        {
          id: '1',
          type: 'Home',
          name: 'Sujan',
          mobile: '+91 9827228928',
          flatNo: '',
          blockName: 'Bangalore, Dasarahalli',
          buildingName: '',
          street: '',
          landmark: '',
          pincode: '560024',
          locality: 'Bangalore',
        },
        {
          id: '2',
          type: 'Home',
          name: '',
          mobile: '+91 9882919289',
          flatNo: '',
          blockName: 'Bangalore, Coffee Board',
          buildingName: '',
          street: '',
          landmark: '',
          pincode: '560024',
          locality: 'Bangalore',
        },
      ],

      selectedAddressId: '1',

      addAddress: (newAddress) => {
        const id = Date.now().toString();

        set((state) => ({
          addresses: [
            ...state.addresses,
            { ...newAddress, id },
          ],
        }));
      },

      updateAddress: (id, updated) =>
        set((state) => ({
          addresses: state.addresses.map((addr) =>
            addr.id === id ? { ...addr, ...updated } : addr
          ),
        })),

      removeAddress: (id) =>
        set((state) => ({
          addresses: state.addresses.filter((addr) => addr.id !== id),
        })),

      selectAddress: (id) =>
        set({ selectedAddressId: id }),
    }),
    {
      name: 'address-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);