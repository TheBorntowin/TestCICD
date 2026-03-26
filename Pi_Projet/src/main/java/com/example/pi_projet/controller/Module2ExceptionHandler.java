package com.example.pi_projet.controller;

import com.example.pi_projet.exception.Module2Exception;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
@Slf4j
public class Module2ExceptionHandler {

    @ExceptionHandler(Module2Exception.class)
    public ResponseEntity<Object> handleModule2(Module2Exception ex) {
        log.error("Module2Exception code={} message={}", ex.getCode(), ex.getMessage(), ex);
        HttpStatus status = switch (ex.getCode()) {
            case NOT_FOUND -> HttpStatus.NOT_FOUND;
            case CONFLICT -> HttpStatus.CONFLICT;
            case FORBIDDEN -> HttpStatus.FORBIDDEN;
            case PAYMENT_REQUIRED -> HttpStatus.valueOf(402);
            case BAD_REQUEST, VALIDATION -> HttpStatus.BAD_REQUEST;
            default -> HttpStatus.INTERNAL_SERVER_ERROR;
        };
        Map<String, Object> body = new HashMap<>();
        body.put("code", ex.getCode().name());
        body.put("message", ex.getMessage());
        if (ex.getMetadata() != null) body.put("meta", ex.getMetadata());
        return new ResponseEntity<>(body, status);
    }
}
