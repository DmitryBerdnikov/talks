import {
  AppShell,
  Avatar,
  Badge,
  Button,
  Checkbox,
  Input,
  NavLink,
  Select,
  ThemeIcon,
  Pagination,
  Paper,
  Table,
  Title,
  createTheme,
} from '@mantine/core'
import styles from './users-theme.module.css'

// This theme is scoped to CustomUsersPage. The default table keeps Mantine defaults.
export const usersTheme = createTheme({
  primaryColor: 'cobalt',
  primaryShade: 7,
  defaultRadius: 'md',
  black: '#17234a',
  colors: {
    gray: [
      '#f8f9ff',
      '#eef1fb',
      '#e0e6fa',
      '#cdd7f4',
      '#a6b7ef',
      '#7988af',
      '#566383',
      '#46577f',
      '#2c3e68',
      '#17234a',
    ],
    cobalt: [
      '#edf1ff',
      '#dce4ff',
      '#b4c4ff',
      '#8ba5ff',
      '#6586ff',
      '#486bff',
      '#365cf5',
      '#2448e5',
      '#1d3bc3',
      '#172f9c',
    ],
  },
  headings: {
    fontWeight: '800',
    sizes: { h2: { fontSize: '32px', lineHeight: '1.15' } },
  },
  components: {
    AppShell: AppShell.extend({
      classNames: { main: styles.main, navbar: styles.navbar, header: styles.header },
    }),
    NavLink: NavLink.extend({
      classNames: {
        root: styles.navLink,
        label: styles.navLabel,
        description: styles.navDescription,
      },
    }),
    ThemeIcon: ThemeIcon.extend({ defaultProps: { radius: 'md' } }),
    Select: Select.extend({
      defaultProps: { comboboxProps: { withinPortal: false } },
      classNames: { dropdown: styles.dropdown, option: styles.option },
    }),
    Title: Title.extend({ styles: { root: { letterSpacing: '-0.035em' } } }),
    Button: Button.extend({
      defaultProps: { size: 'md', radius: 'md' },
      classNames: { root: styles.button },
      styles: { root: { fontWeight: 650 }, label: { letterSpacing: '-0.01em' } },
    }),
    Input: Input.extend({
      defaultProps: { size: 'md', radius: 'md' },
      styles: {
        wrapper: { '--input-placeholder-color': '#566383', '--input-bd-focus': '#365cf5' },
        input: { backgroundColor: '#fff', borderColor: '#bcc9eb', fontSize: 13 },
        section: { color: '#566383' },
      },
    }),
    Paper: Paper.extend({
      defaultProps: { radius: 'lg' },
      styles: {
        root: { border: '1px solid #dce3fa', overflow: 'hidden', backgroundColor: '#fff' },
      },
    }),
    Avatar: Avatar.extend({
      defaultProps: { radius: 'md' },
      styles: { root: { fontWeight: 700, fontSize: 11 } },
    }),
    Checkbox: Checkbox.extend({
      defaultProps: { radius: 5 },
      styles: { input: { borderColor: '#8395c4', cursor: 'pointer' } },
    }),
    Badge: Badge.extend({
      defaultProps: { radius: 'sm' },
      styles: (_theme, props) => ({
        root: {
          textTransform: 'none',
          fontWeight: 600,
          letterSpacing: 0,
          paddingInline: 10,
          fontSize: 12,
          height: 24,
          color:
            props.color === 'green' ? '#08784a' : props.color === 'gray' ? '#bc294e' : '#3852bb',
          backgroundColor:
            props.color === 'green' ? '#d8f8e6' : props.color === 'gray' ? '#ffe3ec' : '#e2eaff',
        },
      }),
    }),
    Table: Table.extend({
      defaultProps: { borderColor: '#e8edfc', highlightOnHoverColor: '#f1f4ff', tabularNums: true },
      styles: {
        table: { color: '#17234a' },
        thead: { backgroundColor: '#fff' },
        th: {
          fontSize: 10,
          fontWeight: 700,
          color: '#566383',
          letterSpacing: '0.045em',
          textTransform: 'uppercase',
          paddingBlock: 12,
        },
        td: { paddingBlock: 8, height: 54 },
      },
    }),
    Pagination: Pagination.extend({
      defaultProps: { radius: 'sm', gap: 5 },
      styles: { control: { fontWeight: 600, borderColor: '#cdd7f4' } },
    }),
  },
})
