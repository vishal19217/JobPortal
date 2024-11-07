package com.vishal.JobApp.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Optional;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseBody<T> {
    String statusCode;

    public ResponseBody(Optional<User> byUsername) {

    }
}
