import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatusById } from "../ui/requiest-slice";

export function useRequest(thunk, ...params) {
  const dispatch = useDispatch();
  const [request, setRequest] = useState();

  const requestStatus = useSelector((state) =>
    selectRequestStatusById(state, request?.requestId)
  );

  useEffect(() => {
    const request = dispatch(thunk(...params));

    setRequest(request);

    return () => {
      request.abort();
      setRequest(null);
    };
  }, [dispatch, thunk, ...params]);

  return requestStatus;
}
