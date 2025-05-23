package com.unisinos.finance_manager.repository;

import com.unisinos.finance_manager.entity.Expense;
import com.unisinos.finance_manager.entity.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpenseDao extends CrudRepository<Expense, String> {
}