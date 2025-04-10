package com.unisinos.finance_manager;

import com.unisinos.finance_manager.entity.Product;
import com.unisinos.finance_manager.repository.ProductDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@SpringBootApplication
public class FinanceManagerApplication {
	public static void main(String[] args) {
		SpringApplication.run(FinanceManagerApplication.class, args);
	}
}