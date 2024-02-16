const MainPage = () => {
  return <div>메인입니다.</div>
}

export default MainPage

// // 파일 따로
// const usePostSignup = () => {}
//   const [postSignup, { data, loading, error }] = useMutation(POST_SIGNUP);
//   return { postSignup, data, loading, error };
// };

// // Headless Ui
// const useCalendar  = () => {
//   return { date, setDate };
// }

// <Calendar></Calendar>

// // 컴포넌트 내부에
// const { mutate } = usePostSignup();

// const { handleError } = useHandleError;

// mutate({
//   onSuccess: data => {
//     push();
//     console.log(data);
//   },
//   onError: handleError,
// });

// //파일 따로
// const useHandleError = () => {
//   const handleError = error => {
//     console.log(error);
//     // toast.error(error.message);
//     // sentry.captureException(error);
//   };
//   return { handleError };
// };
