import { useContext } from 'react';

import { lighten } from 'polished';

import { ThemeContext } from 'styled-components';
import SelectComponent from 'react-select';

import { Container } from './styles';

const Select: React.FC<{
	options: {
		value: any;
		label: string;
	}[];
	width: number;
}> = ({ width, options }) => {
	const theme = useContext(ThemeContext);

	return (
		<Container width={width}>
			<SelectComponent
				className="select"
				options={options}
				defaultValue={options[0]}
				styles={{
					menu: (provided, state) => ({
						...provided,
						borderRadius: 5,
						transition: 'border .4s, border-width .4s',
					}),
					option: (provided, state) => ({
						...provided,
						color: state.isSelected ? theme.pink : theme.foreground,
						fontWeight: state.isSelected ? 700 : 400,
						transition: 'background .4s',
					}),
					control: (provided) => ({
						...provided,
						paddingLeft: 5,
						transition: 'border .4s, border-width .4s',
					}),
				}}
				theme={{
					borderRadius: 30,
					colors: {
						danger: '#DE350B',
						dangerLight: '#FFBDAD',
						neutral0: theme.currentLine,
						neutral5: lighten(0.05, theme.currentLine),
						neutral10: lighten(0.1, theme.currentLine),
						neutral20: lighten(0.2, theme.currentLine),
						neutral30: lighten(0.3, theme.currentLine),
						neutral40: lighten(0.4, theme.currentLine),
						neutral50: lighten(0.5, theme.currentLine),
						neutral60: lighten(0.6, theme.currentLine),
						neutral70: lighten(0.7, theme.currentLine),
						neutral80: lighten(0.8, theme.currentLine),
						neutral90: lighten(0.9, theme.currentLine),
						primary: lighten(0.1, theme.background),
						primary75: lighten(0.075, theme.background),
						primary50: lighten(0.05, theme.background),
						primary25: lighten(0.025, theme.background),
					},
				}}
			/>
		</Container>
	);
};

export default Select;
