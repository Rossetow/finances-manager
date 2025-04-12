package com.unisinos.finance_manager.repository;

import com.unisinos.finance_manager.entity.Income;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IncomeDao extends CrudRepository<Income, String> {
}