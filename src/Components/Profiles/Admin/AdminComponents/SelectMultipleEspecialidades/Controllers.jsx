import React, { MouseEventHandler } from 'react';

// import Select, {
//   components,
//   MultiValueGenericProps,
//   MultiValueProps,
//   OnChangeValue,
//   Props,
// } from 'react-select';
// import {
//   SortableContainer,
//   SortableContainerProps,
//   SortableElement,
//   SortEndHandler,
//   SortableHandle,
// } from 'react-sortable-hoc';

// function arrayMove<T>(array: readonly T[], from: number, to: number) {
//     const slicedArray = array.slice();
//     slicedArray.splice(
//       to < 0 ? array.length + to : to,
//       0,
//       slicedArray.splice(from, 1)[0]
//     );
//     return slicedArray;
//   }
  
//   const SortableMultiValue = SortableElement(
//     (props: MultiValueProps<ColourOption>) => {
//       // this prevents the menu from being opened/closed when the user clicks
//       // on a value to begin dragging it. ideally, detecting a click (instead of
//       // a drag) would still focus the control and toggle the menu, but that
//       // requires some magic with refs that are out of scope for this example
//       const onMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//       };
//       const innerProps = { ...props.innerProps, onMouseDown };
//       return <components.MultiValue {...props} innerProps={innerProps} />;
//     }
//   );
  
//   const SortableMultiValueLabel = SortableHandle(
//     (props: MultiValueGenericProps) => <components.MultiValueLabel {...props} />
//   );
  
//   const SortableSelect = SortableContainer(Select) as React.ComponentClass<
//     // Props<ColourOption, true> & SortableContainerProps
//   >;