import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";
// import Poppins from "https://fonts.googleapis.com/css2?family=Poppins&display=swap";
import { mode } from "@chakra-ui/theme-tools";
const changingBorder = {
  variants: {
    filled: {
      field: {
        backgroundColor: "brand.200",
        borderColor: "brand.400",

        rounded: "md",
        _hover: "disabled",
        // _focus:{
        //     borderColor : 'brand.100',
        // }
      },
    },
  },
};

const Theming = extendTheme(
  {
    breakpoints: {
      sm: "320px",
      md: "375px",
      lg: "425px",
      xl: "768px",
      "2xl": "1024px",
      "3xl": "1440px",
    },
    colors: {
      brand: {
        100: "#659DBD",
        200: "#FBEEC1",
        300: "#FFFFFF",
        400: "#000000",
      },
    },
    fonts: {
      heading: `Poppins, ${base.fonts.heading}`,
      body: `Poppins, ${base.fonts.body}`,
    },

    bgGradient: {
      temp: {
        primy: "linear(to-r, #5BD7FC,#86FFA3, #F6FF96 )",
      },
    },

    components: {
      Button: {
        variants: {
          SimplePrimary: (props) => ({
            rounded: "md",
            backgroundColor: mode("brand.700", "brand.600")(props),
            color: mode("brand.600", "brand.100")(props),
          }),
          GradientPrimary: (props) => ({
            rounded: "md",
            _focus: {
              ring: 2,
              ringColor: "brand.700",
            },
            bgGradient: mode("linear(to-r, #5BD7FC,#86FFA3, #F6FF96 )")(props),
            color: mode("brand.100", "brand.600")(props),
            _hover: {
              background: mode("disabled")(props),
            },
            _active: {
              background: mode("disabled")(props),
            },
          }),
        },
      },
      Textarea: {
        variants: {
          filled: {
            field: {
              _focus: {
                borderColor: "brand.400",
              },
            },
          },
        },
      },
      Input: {
        ...changingBorder,
      },
      DebounceInput: {
        ...changingBorder,
      },
      Select: {
        ...changingBorder,
      },
      Checkbox: {
        baseStyle: {
          control: {
            _focus: {
              ring: 2,
              ringColor: "brand.400",
            },
          },
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select", "Textarea"],
  })
);

export default Theming;
